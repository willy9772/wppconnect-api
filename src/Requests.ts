import axios, { AxiosRequestConfig } from "axios";
import { host, secretKey } from "..";

export default function (config: AxiosRequestConfig) {
    return new Promise((resolve, reject) => {
        try {

            axios({
                ...config,
                headers: {
                    secretKey,
                    ...config.headers,
                },
                url: host + config.url,
            }).then((response) => {
                resolve(response.data);
            }).catch((error) => {
                reject(error);
            });

        } catch (error) {
            reject(error);
        }
    });
}