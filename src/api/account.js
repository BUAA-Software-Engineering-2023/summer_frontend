import requests from "@/utils/request";

export default {
    loginWithCode(email, code) {
        return requests({
            url: '/loginWithCode',
            method: 'POST',
            data: {
                email, code
            }
        });
    },
    loginWithPassword(email, password) {
        return requests({
            url: '/loginWithPassword',
            method: 'POST',
            data: {
                email, password
            }
        });
    },
    register(phone_number, verification_code, password) {
        return requests({
            url: '/register',
            method: 'POST',
            data: {
                phone_number, verification_code, password
            }
        });
    },
    requestCode(phone_number) {
        return requests({
            url: `/sendCode/${phone_number}`,
            method: 'GET'
        });
    },
    requestUserInfo() {
        return requests({
            url: '/userInfo',
            method: 'GET'
        });
    },
    requestUnread() {
        return requests({
            url: '/unreadMessage',
            method: 'GET'
        });
    },
    updatePassword(old_password, new_password) {
        return requests({
            url: '/changePassword',
            method: 'POST',
            data: {
                old_password, new_password
            }
        });
    },
    updatePhone(new_phone_number, vertification_code) {
        return requests({
            url: '/changePhone',
            method: 'POST',
            data: {
                new_phone_number, vertification_code
            }
        });
    },
    resetPassword(phone_number, vertification_code, new_password) {
        return requests({
            url: '/resetPassword',
            method: 'POST',
            data: {
                phone_number, vertification_code, new_password
            }
        });
    }
}