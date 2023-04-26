import { getAccessToken } from '@auth0/nextjs-auth0';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';

export async function getServerSideProps(context: any) {
    const { accessToken } = await getAccessToken(context.req, context.res);

    console.log(accessToken);

    return {
        props: {},
    };
}

function Access() {
    return (
        <h1>Access</h1>
    )
}

export default withPageAuthRequired(Access);