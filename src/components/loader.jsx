import { useState } from "react";
import { css } from "@emotion/react";
import BarLoader from "react-spinners/BarLoader";

const override = css`
  display: block;
  margin: 0 auto;
  margin-top:400px
  border-color: red;
  justify-content:'center'
  align-items:'center'
  justify-content: center;
`;

function Loader(){
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState('black')

return(
    <>
<div style={{marginTop:"25%",alignItems:'center',justifyContent:'center',textAlign:'center'}}>
<BarLoader  color={color} loading={loading} css={override} width={100} height={10} />
<h4>Loading Please Wait !</h4>
</div>
</>
)
}
export default Loader