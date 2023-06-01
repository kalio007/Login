import React from 'react';
import './App.css'
import { SignInWithGoogle } from './Firebase';
import { Button, ButtonGroup } from '@chakra-ui/react';
import { Avatar, AvatarBadge, AvatarGroup, Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';

function App() {

  return (
    <>
      <div>
        <Card align="center" boxShadow='md'>
          <CardHeader>
          <Avatar name="Dan Abrahmov" src={localStorage.getItem("profilepic")} />
          </CardHeader>
          <CardBody>
          <h1>{localStorage.getItem("name")}</h1>
          </CardBody>
          <CardFooter>
            <Button
              size="md"
              height="48px"
              width="200px"
              border="2px"
              borderColor="green.500"
              onClick={SignInWithGoogle}
            >
              Sign In
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}

export default App
