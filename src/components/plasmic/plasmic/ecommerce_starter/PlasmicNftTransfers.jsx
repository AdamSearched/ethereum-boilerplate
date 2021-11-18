// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: wsRXF2j5MAPa2EH2XkCbWH
// Component: ymFVcsc07v
import * as React from "react";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_ecommerce_starter.module.css"; // plasmic-import: wsRXF2j5MAPa2EH2XkCbWH/projectcss
import * as sty from "./PlasmicNftTransfers.module.css"; // plasmic-import: ymFVcsc07v/css

export const PlasmicNftTransfers__VariantProps = new Array();

export const PlasmicNftTransfers__ArgProps = new Array();

function PlasmicNftTransfers__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        defaultcss.all,
        projectcss.all,
        projectcss.root_reset,
        sty.root
      )}
    >
      <div
        data-plasmic-name={"columns"}
        data-plasmic-override={overrides.columns}
        className={classNames(defaultcss.all, projectcss.all, sty.columns)}
      >
        <div
          className={classNames(
            defaultcss.all,
            projectcss.all,
            sty.column__vlZte
          )}
        >
          <div
            data-plasmic-name={"transferDate"}
            data-plasmic-override={overrides.transferDate}
            className={classNames(
              defaultcss.all,
              projectcss.all,
              defaultcss.__wab_text,
              sty.transferDate
            )}
          >
            {"date"}
          </div>
        </div>

        <div
          className={classNames(
            defaultcss.all,
            projectcss.all,
            sty.column__vmh8A
          )}
        >
          <div
            data-plasmic-name={"ownerAddress"}
            data-plasmic-override={overrides.ownerAddress}
            className={classNames(
              defaultcss.all,
              projectcss.all,
              defaultcss.__wab_text,
              sty.ownerAddress
            )}
          >
            {"owner"}
          </div>
        </div>

        <div
          className={classNames(
            defaultcss.all,
            projectcss.all,
            sty.column__sNnqO
          )}
        >
          <div
            data-plasmic-name={"text"}
            data-plasmic-override={overrides.text}
            className={classNames(
              defaultcss.all,
              projectcss.all,
              defaultcss.__wab_text,
              sty.text
            )}
          >
            {"Value"}
          </div>
        </div>
      </div>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "columns", "transferDate", "ownerAddress", "text"],
  columns: ["columns", "transferDate", "ownerAddress", "text"],
  transferDate: ["transferDate"],
  ownerAddress: ["ownerAddress"],
  text: ["text"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicNftTransfers__ArgProps,
      internalVariantPropNames: PlasmicNftTransfers__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicNftTransfers__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNftTransfers";
  } else {
    func.displayName = `PlasmicNftTransfers.${nodeName}`;
  }
  return func;
}

export const PlasmicNftTransfers = Object.assign(
  // Top-level PlasmicNftTransfers renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    columns: makeNodeComponent("columns"),
    transferDate: makeNodeComponent("transferDate"),
    ownerAddress: makeNodeComponent("ownerAddress"),
    text: makeNodeComponent("text"),
    // Metadata about props expected for PlasmicNftTransfers
    internalVariantProps: PlasmicNftTransfers__VariantProps,
    internalArgProps: PlasmicNftTransfers__ArgProps
  }
);

export default PlasmicNftTransfers;
/* prettier-ignore-end */