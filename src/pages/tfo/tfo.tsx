import { useEffect, useState } from "react";
import { TFOContent } from "src/components/tfo/content/tfo-content";
import { TFOHeader } from "src/components/tfo/header/tfo-header";
import { getDetails } from "src/core";
import { TFODetailsResponse } from "src/types/tfo.type";
import { TFOWrapper } from "./tfo.styles";

const TFO = () => {
  const [details, setDetails] = useState<TFODetailsResponse>();

  useEffect(() => {
    async function fetch() {
      const response = await getDetails();
      setDetails(response);
    }
    fetch();
  }, []);

  return (
    <TFOWrapper>
      <TFOHeader></TFOHeader>
      {details && (
        <>
          <TFOContent
            booking={details.booking}
            user={details.user}
          ></TFOContent>
        </>
      )}
    </TFOWrapper>
  );
};
export default TFO;
