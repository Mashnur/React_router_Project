import { useRouteError } from "react-router-dom";


const Erorpage = () => {
    const eror= useRouteError();
    console.log(eror)
    return (
        <div>
            <h3>OOPS!!!</h3>
            <p>{eror.status.Text || eror.message}</p>
            {
                eror.status == 404 && <div>
                    <p>Go BACk</p>
                  <a className="bg-fuchsia-600" href="/">GO BAck</a>

                </div>
            }
            
        </div>
    );
};

export default Erorpage;