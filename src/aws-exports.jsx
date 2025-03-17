import { Amplify } from 'aws-amplify';

const awsExports = {
    Auth: {
        region: "us-east-1",
        userPoolId: "us-east-1_gvqAhZ1L4",
        userPoolWebClientId: "5qde3n17opheqnrug4gm07plfo",
        mandatorySignIn: false,
        authenticationFlowType: "USER_PASSWORD_AUTH",
        oauth: {
            domain: "https://cognito-idp.us-east-1.amazonaws.com/us-east-1_gvqAhZ1L4/.well-known/jwks.json",
            scope: ["email", "profile", "openid"],
            redirectSignIn: "http://localhost:5173/",
            redirectSignOut: "http://localhost:5173/",
            responseType: "code"
        }
    },
    Storage: {
        AWSS3: {
            bucket: "cld166-final-bucket",
            region: "us-east-1",
        },
    },
    API: {
        endpoints: [
            {
                name: "final-app-api",
                endpoint: "https://ju1f8u4d7k.execute-api.us-east-1.amazonaws.com/Deployed",
                region: "us-east-1",
            },
        ],
    },
};

Amplify.configure(awsExports);

export default awsExports;
