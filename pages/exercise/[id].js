import React from "react";

import DetailPage from "../../components/DetailPage";

const exercise = ({ id }) => {
  return (
    <>
      <DetailPage id={id} />
    </>
  );
};

export default exercise;

export async function getServerSideProps(context) {
  const id = context.params.id;
  return {
    props: { id }, // will be passed to the page component as props
  };
}
