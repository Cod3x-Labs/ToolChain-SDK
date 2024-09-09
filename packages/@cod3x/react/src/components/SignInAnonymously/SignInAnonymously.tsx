import React from 'react';
import { FaChevronRight, FaUser } from 'react-icons/fa';
import { useCodexSDK } from '../../context';
import Button from '../Button/Button';
function SignInAnonymously() {
  const { supabase } = useCodexSDK();

  const signInAnonymously = async () => {
    const auth = await supabase?.auth.signInAnonymously();
    if (auth && auth.error) {
      console.error('An error occurred:', auth.error);
    } else {
      console.log('User:', auth?.data);
    }
  };

  return (
    <Button onClick={signInAnonymously} color="accentColor">
      <FaUser className="absolute left-5" />
      Anonymous Login
      <FaChevronRight className="absolute right-2" />
    </Button>
  );
}

export default SignInAnonymously;
