import { AuthActionType, AppActionType } from '#declarations/enums/Redux';
import { AuthLoginPayload, AppSetOnAuthChangeSubPayload } from '#declarations/interfaces/Redux';
import { AuthAction, AppAction } from '#declarations/types/Redux';
import { LoginSuccess } from '#firebase/declarations/types';
import { authRef } from '#firebase/initClientApp';
import axios, { AxiosResponse } from 'axios';
import { sendEmailVerification } from 'firebase/auth';
import { Dispatch, Unsubscribe } from 'redux';
import { isProduction, URLS } from 'utils/misc';

type LoginUserAuth = (payload: AuthLoginPayload) => (dispatch: Dispatch<AuthAction>) => {
	type: AuthActionType.LOGIN;
	payload: AuthLoginPayload;
};
type SetOnAuthChangeSubApp = (payload: AppSetOnAuthChangeSubPayload) => (dispatch: Dispatch<AppAction>) => {
	type: AppActionType.SET_ON_AUTH_CHANGE_SUB;
	payload: Unsubscribe;
};

type Params = { loginUserAuth: LoginUserAuth; setOnAuthChangeSubApp: SetOnAuthChangeSubApp };

export { subscribeOnAuthChange };

const subscribeOnAuthChange = ({ loginUserAuth, setOnAuthChangeSubApp }: Params) => {
	const unsubscribe = authRef.onAuthStateChanged(async user => {
		if (user) {
			try {
				const token = await user.getIdToken();

				!user.emailVerified && isProduction && (await sendEmailVerification(user));

				const {
					data: { user: userInfo },
				}: AxiosResponse<LoginSuccess> = await axios.post(URLS.API_LOGIN, { token });

				loginUserAuth({ token, user: userInfo });
			} catch ({ code, message }) {
				// TODO handle errors
				console.log('On auth state change error:', code, message);
			}
		}
	});

	setOnAuthChangeSubApp(unsubscribe);
};
