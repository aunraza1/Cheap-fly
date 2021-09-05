import axios from 'axios';

 const getToken = async () => {
    const params = new URLSearchParams();
    params.append('grant_type', 'client_credentials');
    params.append('client_id', 'b5hlkyJj5z4mqkURsoG9AISMg7aTETpK');
    params.append('client_secret', 'e9fkGN4U6BeENo1u');

    const response = await axios({
        method: "post",
        url: "https://test.api.amadeus.com/v1/security/oauth2/token",
        data: params,
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
    })
    return { response }


}

export {
    getToken
}

