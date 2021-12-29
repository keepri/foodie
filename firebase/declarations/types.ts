import { UserRecord } from 'firebase-admin/lib/auth/user-record';
import { RestaurantSchema } from './schemas';

export type RequestError = {
	message: string;
	code?: string;
	errorFields?: string[];
};

// REGISTER ENDPOINT
export type RegisterReturnType =
	| {
			user?: UserRecord;
			verificationEmail?: string;
	  }
	| RequestError;

// RESTAURANTS ENDPOINT
export type RestaurantsReturnType =
	| {
			restaurants?: RestaurantSchema[];
			restaurant?: RestaurantSchema;
	  }
	| RequestError;

export type RestaurantsRequestBody = {
	uid?: string;
	data?: Partial<RestaurantSchema>;
};
