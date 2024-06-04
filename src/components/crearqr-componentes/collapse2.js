import React from "react";
import Collapse from "./collapse1";

function Collapse2() {
  return (
    <div>
      <Collapse isCollapsed={false}>
        <div>
          <h3>Instrucciones</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis ex vel sapien ullamcorper lobortis et eget libero. Donec ultrices erat lectus, quis elementum metus volutpat non. Suspendisse sed luctus mauris. Aenean eu ligula id purus laoreet sagittis. Donec rhoncus aliquet dolor, vel lobortis ligula pretium in. Curabitur ut bibendum nulla. Sed id nisi urna. Cras a est blandit, aliquam turpis non, volutpat massa. Integer justo turpis, lacinia non enim egestas, lobortis iaculis lectus. Fusce sed purus purus.</p>
        </div>
      </Collapse>
    </div>
  );
}

export default Collapse2;