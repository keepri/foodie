import axios, { AxiosResponse } from 'axios';

import { URLS } from 'utils/misc';
import { ClientRegisterFields } from '#firebase/declarations/interfaces';
import {
	RegisterReturnType,
	//  RegisterSuccess
} from '#firebase/declarations/types';

export { registerUser };

const registerUser = async (form: ClientRegisterFields) => {
	try {
		const { data }: AxiosResponse<RegisterReturnType> = await axios.post(URLS.API_REGISTER, form);

		return data;
	} catch (error) {
		throw error;
	}
};
