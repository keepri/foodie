import { UserRecord } from 'firebase-admin/lib/auth/user-record';

export type RegisterReturnType = {
	user?: UserRecord;
	verificationEmail?: string;
	message: string;
	code?: string;
};
