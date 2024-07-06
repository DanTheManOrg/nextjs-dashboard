'use client';

export default function ErrorButton() {
  return <button onClick={() => {throw new Error('An error occurred!')}}>Throw Error</button>
};