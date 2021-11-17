// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: wsRXF2j5MAPa2EH2XkCbWH
// Component: 1SCuxqmrOn7
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import NavBar from "../../NavBar"; // plasmic-import: HJQvpfJRA4yw/component
import TextInput from "../../TextInput"; // plasmic-import: 3TiJbjI8iVeh/component
import Button from "../../Button"; // plasmic-import: LPkJNTjVmA5d/component
import Footer from "../../Footer"; // plasmic-import: XC4xprCxMga4/component
import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: k702YoelP3ze/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_ecommerce_starter.module.css"; // plasmic-import: wsRXF2j5MAPa2EH2XkCbWH/projectcss
import * as sty from "./PlasmicMint.module.css"; // plasmic-import: 1SCuxqmrOn7/css

export const PlasmicMint__VariantProps = new Array();

export const PlasmicMint__ArgProps = new Array();

function PlasmicMint__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants()
  });

  return (
    <React.Fragment>
      <div className={defaultcss.plasmic_page_wrapper}>
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
          <NavBar
            data-plasmic-name={"navBar"}
            data-plasmic-override={overrides.navBar}
            className={classNames("__wab_instance", sty.navBar)}
          />

          <p.Stack
            as={"section"}
            data-plasmic-name={"section"}
            data-plasmic-override={overrides.section}
            hasGap={true}
            className={classNames(defaultcss.all, projectcss.all, sty.section)}
          >
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(
                defaultcss.all,
                projectcss.all,
                sty.freeBox__h2Bsm
              )}
            >
              <div
                className={classNames(
                  defaultcss.all,
                  projectcss.all,
                  sty.freeBox___7BAeP
                )}
              >
                <div
                  className={classNames(
                    defaultcss.all,
                    projectcss.all,
                    defaultcss.__wab_text,
                    sty.text__pQoM6
                  )}
                >
                  {"Asset link"}
                </div>

                <div
                  className={classNames(
                    defaultcss.all,
                    projectcss.all,
                    defaultcss.__wab_text,
                    sty.text__ttEcB
                  )}
                >
                  {"The asset created on IPFS goes here"}
                </div>

                <TextInput
                  data-plasmic-name={"mintLink"}
                  data-plasmic-override={overrides.mintLink}
                  className={classNames("__wab_instance", sty.mintLink)}
                  placeholder={"ipfs link"}
                />
              </div>

              <div
                className={classNames(
                  defaultcss.all,
                  projectcss.all,
                  sty.freeBox__nYji2
                )}
              >
                <div
                  className={classNames(
                    defaultcss.all,
                    projectcss.all,
                    defaultcss.__wab_text,
                    sty.text___4LP5I
                  )}
                >
                  {"NFT Name"}
                </div>

                <div
                  className={classNames(
                    defaultcss.all,
                    projectcss.all,
                    defaultcss.__wab_text,
                    sty.text__i3YVq
                  )}
                >
                  {"What is the NFT called?"}
                </div>

                <TextInput
                  data-plasmic-name={"mintName"}
                  data-plasmic-override={overrides.mintName}
                  className={classNames("__wab_instance", sty.mintName)}
                  placeholder={"NFT Name"}
                />
              </div>
            </p.Stack>

            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(
                defaultcss.all,
                projectcss.all,
                sty.freeBox__fe2Q0
              )}
            >
              <div
                className={classNames(
                  defaultcss.all,
                  projectcss.all,
                  sty.freeBox__x4Kg
                )}
              >
                <div
                  className={classNames(
                    defaultcss.all,
                    projectcss.all,
                    defaultcss.__wab_text,
                    sty.text__iihF1
                  )}
                >
                  {"NFT Description"}
                </div>

                <div
                  className={classNames(
                    defaultcss.all,
                    projectcss.all,
                    defaultcss.__wab_text,
                    sty.text___1ACck
                  )}
                >
                  {"What is the asset, stored as meta data on the IPFS"}
                </div>

                <TextInput
                  data-plasmic-name={"mintDesc"}
                  data-plasmic-override={overrides.mintDesc}
                  className={classNames("__wab_instance", sty.mintDesc)}
                  placeholder={"NFT Description"}
                />

                <div
                  data-plasmic-name={"statusText"}
                  data-plasmic-override={overrides.statusText}
                  className={classNames(
                    defaultcss.all,
                    projectcss.all,
                    defaultcss.__wab_text,
                    sty.statusText
                  )}
                >
                  {""}
                </div>

                <Button
                  data-plasmic-name={"mintButton"}
                  data-plasmic-override={overrides.mintButton}
                  className={classNames("__wab_instance", sty.mintButton)}
                  colors={"blue"}
                  showStartIcon={"showStartIcon"}
                >
                  {"Mint NFT"}
                </Button>
              </div>
            </p.Stack>

            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(
                defaultcss.all,
                projectcss.all,
                sty.freeBox___3CiCi
              )}
            >
              <p.PlasmicImg
                data-plasmic-name={"img"}
                data-plasmic-override={overrides.img}
                alt={""}
                className={classNames(sty.img)}
                displayHeight={"32px"}
                displayMaxHeight={"none"}
                displayMaxWidth={"none"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"auto"}
                loader={"plasmic"}
                src={
                  "https://www.patagonia.com/on/demandware.static/-/Library-Sites-PatagoniaShared/default/dw4b201dc8/images/for-the-planet.png"
                }
              />

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(
                  defaultcss.all,
                  projectcss.all,
                  sty.freeBox___1XXgR
                )}
              >
                <div
                  className={classNames(
                    defaultcss.all,
                    projectcss.all,
                    defaultcss.__wab_text,
                    sty.text__clMMx
                  )}
                >
                  {"1% of your purchase will go to a grassroot organization."}
                </div>

                <Button
                  data-plasmic-name={"button"}
                  data-plasmic-override={overrides.button}
                  className={classNames("__wab_instance", sty.button)}
                  colors={"link"}
                >
                  {"Learn more"}
                </Button>
              </p.Stack>
            </p.Stack>
          </p.Stack>

          <Footer
            data-plasmic-name={"footer"}
            data-plasmic-override={overrides.footer}
            className={classNames("__wab_instance", sty.footer)}
          />
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "navBar",
    "section",
    "mintLink",
    "mintName",
    "mintDesc",
    "statusText",
    "mintButton",
    "img",
    "button",
    "footer"
  ],

  navBar: ["navBar"],
  section: [
    "section",
    "mintLink",
    "mintName",
    "mintDesc",
    "statusText",
    "mintButton",
    "img",
    "button"
  ],

  mintLink: ["mintLink"],
  mintName: ["mintName"],
  mintDesc: ["mintDesc"],
  statusText: ["statusText"],
  mintButton: ["mintButton"],
  img: ["img"],
  button: ["button"],
  footer: ["footer"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicMint__ArgProps,
      internalVariantPropNames: PlasmicMint__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicMint__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicMint";
  } else {
    func.displayName = `PlasmicMint.${nodeName}`;
  }
  return func;
}

export const PlasmicMint = Object.assign(
  // Top-level PlasmicMint renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navBar: makeNodeComponent("navBar"),
    section: makeNodeComponent("section"),
    mintLink: makeNodeComponent("mintLink"),
    mintName: makeNodeComponent("mintName"),
    mintDesc: makeNodeComponent("mintDesc"),
    statusText: makeNodeComponent("statusText"),
    mintButton: makeNodeComponent("mintButton"),
    img: makeNodeComponent("img"),
    button: makeNodeComponent("button"),
    footer: makeNodeComponent("footer"),
    // Metadata about props expected for PlasmicMint
    internalVariantProps: PlasmicMint__VariantProps,
    internalArgProps: PlasmicMint__ArgProps
  }
);

export default PlasmicMint;
/* prettier-ignore-end */
