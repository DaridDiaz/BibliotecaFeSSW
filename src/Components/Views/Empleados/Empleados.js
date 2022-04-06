import Nav from "../../UX/Nav/Nav";
import Page from "../../UX/Page/Page";

const Empleados = ({empleados})=>{
  return (
    <Page header={<h2>empleados</h2>} footer={<Nav/>}>
      {
        empleados.map((o)=>{
          return (
            <table class="default">
              <tr>
                <td>identidad</td>
                <td>nombres</td>
                <td>apellidos</td>
              </tr>
              <tr>
                <section key={o._id}>
                <td>{o.identidad}</td>
                <td>{o.nombres}</td>
                <td>{o.apellidos}</td>
                </section>
              </tr>
            </table>
          )
        })
      }
    </Page>
  );
}

// const empleadosItem = ({empleado})=>{
//   return (
//     <section>
//       {empleado.nombres} {empleado.apellidos}
//     </section>
//   );
// }

export default Empleados;
