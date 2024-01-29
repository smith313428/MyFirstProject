import React, { Fragment } from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { NavLink } from "react-router-dom";
import IntlMessages from "../../helpers/IntlMessages";

const getMenuTitle = sub => {
  return <IntlMessages id={`menu.${sub}`} />;
};

const getUrl = (path, sub, index) => {
  if (index === 0) {
    return "";
  } else {
    return path.split(sub)[0] + sub;
  }
};

const BreadcrumbContainer = ({ heading, match, extraActions }) => {
  return (
    <Fragment>
      {heading && <h1><IntlMessages id={heading}/></h1>}
      {match && <BreadcrumbItems match={match} extraActions={extraActions}/>}
    </Fragment>
  );
};

export const BreadcrumbItems = ({ match, extraActions }) => {
  const path = match.path.substr(1);
  let paths = path.split("/");
  if (paths[paths.length - 1].indexOf(":") > -1) {
    paths = paths.filter(x => x.indexOf(":") === -1);
  }
  const renderTab = (sub, index) => {
    if (paths.length !== index + 1) {
      if (extraActions?.[index]) {
        const exrtraAction = extraActions[index];
        return (
          <NavLink to={"/" + getUrl(path, sub, index)} onClick={exrtraAction}>
            {getMenuTitle(sub)}
          </NavLink>
        );
      } else {
        return (
          <NavLink to={"/" + getUrl(path, sub, index)}>
            {getMenuTitle(sub)}
          </NavLink>
        );
      }
    } else {
      return getMenuTitle(sub)
    }
  }
  return (
    <Fragment>
      <Breadcrumb className="pt-0 breadcrumb-container d-none d-sm-block d-lg-inline-block">
        {paths.map((sub, index) => {
          return (
            <BreadcrumbItem key={index} active={paths.length === index + 1}>
              {renderTab(sub, index)}
            </BreadcrumbItem>
          );
        })}
      </Breadcrumb>
    </Fragment>
  );
};

export default BreadcrumbContainer;
