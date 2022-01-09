import { GetServerSidePropsResult } from 'next/types';
import { UrlObject } from 'url';

export type Url = string | UrlObject;
export type GetServerSidePropsReturn<T> = Promise<GetServerSidePropsResult<T>>;
