"use client";

const error = (error) => {
  console.log(error);
  //   return <div>there is some error</div>;
  return <div>{error.error.message}</div>;
};

export default error;
