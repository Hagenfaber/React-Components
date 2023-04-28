/** @format */

'use client';

import React from "react";
import PropTypes from "prop-types";

import {signInWithGooglePopup} from "@/utils/firebase.utils";
import { BeakerIcon } from '@heroicons/react/24/solid'


interface IGoogleLoginButtonProps {}
const GoogleLoginButton = ({}: IGoogleLoginButtonProps) => {

    const signInWithGoogle = async () => {
        const {user} = await signInWithGooglePopup();
    };

	return (
		<>
			<button className="btn-google" onClick={e => signInWithGoogle()}>
				<BeakerIcon className="h-6 w-6"/>
                <span className="">Sign in with google</span>
			</button>
		</>
	);
};

export default GoogleLoginButton;
