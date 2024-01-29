import React from 'react'
import { Colxx } from "../common/CustomBootstrap";
import {Card} from "reactstrap";
import classnames from "classnames";
import { NavLink } from "react-router-dom";

const PromotionHeader = ()=>{
    return(
        <Colxx  className="mb-3">
            <Card
                className={classnames("d-flex flex-row", {
                    active: true
                })}
            >
                <div className="pl-2 d-flex flex-grow-1 min-width-zero">
                <div className="card-body align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero align-items-lg-center">
                    <NavLink to={`?p=${''}`} className="w-40 w-sm-100">
                    <p className="list-item-heading mb-1 truncate">
                        TITLE
                    </p>
                    </NavLink>
                    <p className="mb-1 text-muted text-one w-15 w-sm-100">
                    CATEGORY
                    </p>
                    <p className="mb-1 text-muted text-one w-15 w-sm-100">
                    DESCRIPTION
                    </p>
                    <p className="mb-1 text-muted text-one w-15 w-sm-100">
                    TYPE
                    </p>
                    <p className="mb-1 text-muted text-one w-15 w-sm-100">
                    Date
                    </p>
                    <div className="delete-promotion">
                        <i className="simple-icon-trash"/> 
                    </div>
                </div>
                </div>
            </Card>
        </Colxx>
    )
}
export default PromotionHeader