import React, { Fragment } from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { NavLink } from "react-router-dom";
import IntlMessages from "../../helpers/IntlMessages";

const getMenuTitle = sub => {
  return <IntlMessages id={sub} />;
};

const BreadcrumbContainer = ({ heading, match,newRouter }) => {
  // const path = match.path.substr(1);
  // let paths = path.split("/");
  // if (paths[paths.length - 1].indexOf(":") > -1) {
  //   paths = paths.filter(x => x.indexOf(":") === -1);
  // }
  return (
    <Fragment>
      {heading && <h1><IntlMessages id={heading} /></h1>}
      <Fragment>
        <Breadcrumb className="pt-0 breadcrumb-container d-none d-sm-block d-lg-inline-block">
          {match.map((item, index) => {
            return (
              <BreadcrumbItem key={index} 
              hover
              // active={paths.length === index + 1}
              style = {{cursor:'pointer', "&:hover": {
                background: "#efefef"
              }}} 
              onClick={() => newRouter(item.name,item.id,item.list)}
              >
                {
                  getMenuTitle(item.name)
                }
              </BreadcrumbItem>
            );
          })}
        </Breadcrumb>
      </Fragment>
    </Fragment>
  );
};

export default BreadcrumbContainer;
