import React from "react";
import Layout from "../components/layout";
import TablaUsuarios from "../components/tabla-usuarios";

function AdminUsuarios() {
  return (
    <Layout>
      <h1>Lista de usuarios</h1>
      <TablaUsuarios url="http://localhost/api-qr-tandem/v1/list-users.php" />
    </Layout>
  );
}

export default AdminUsuarios;
