import React from 'react';

const Signin = () => {

    const styles = {
        img: {
            height: "100vh",
            backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.61), rgba(0, 0, 0, 0.61)), url('./images/Main/Background.png')",
            backgroundSize: "cover",
            backgroundPosition: "center"
        },
    }

    return (
        <section style={styles.img} className='px-6'>
            Sign in
        </section>
    );
};

export default Signin;