const ALLIN_URL: string = process.env.REACT_APP_ALLIN_URL as string; // 'process.env' - this thing is factory-made. Due to this you get
// an access to '.env' file and its settings

const APP_ENV = { // create an object for easier way of getting props
    ALLIN_URL: ALLIN_URL
};

export { APP_ENV } // export this project