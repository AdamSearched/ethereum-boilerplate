// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: wsRXF2j5MAPa2EH2XkCbWH
// Component: IMmkUl7JTNl
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import NavBar from "../../NavBar"; // plasmic-import: HJQvpfJRA4yw/component
import CartItem from "../../CartItem"; // plasmic-import: 3cXt94QRBKke/component
import NftCard from "../../NftCard"; // plasmic-import: 4WAwdYQPvRJW/component
import Button from "../../Button"; // plasmic-import: LPkJNTjVmA5d/component
import Rating from "../../Rating"; // plasmic-import: 1Xj9IcyNJkl8/component
import Separator from "../../Separator"; // plasmic-import: a3Y-HjSmFyWC/component
import Footer from "../../Footer"; // plasmic-import: XC4xprCxMga4/component
import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: k702YoelP3ze/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_ecommerce_starter.module.css"; // plasmic-import: wsRXF2j5MAPa2EH2XkCbWH/projectcss
import * as sty from "./PlasmicNotOwner.module.css"; // plasmic-import: IMmkUl7JTNl/css
import LikeIcon from "./icons/PlasmicIcon__Like"; // plasmic-import: mpxlxEDeHDVB/icon
import Secure2Icon from "./icons/PlasmicIcon__Secure2"; // plasmic-import: xk-FIjWptLhs/icon

export const PlasmicNotOwner__VariantProps = new Array();

export const PlasmicNotOwner__ArgProps = new Array("slot3", "slot5");

function PlasmicNotOwner__RenderFunc(props) {
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
                sty.freeBox___30FwE
              )}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(
                  defaultcss.all,
                  projectcss.all,
                  sty.freeBox__n3NO
                )}
              >
                <div
                  className={classNames(
                    defaultcss.all,
                    projectcss.all,
                    defaultcss.__wab_text,
                    sty.text__yo9C
                  )}
                >
                  {"You're not the confirmed owner"}
                </div>

                {false ? (
                  <CartItem
                    data-plasmic-name={"cartItem"}
                    data-plasmic-override={overrides.cartItem}
                    className={classNames("__wab_instance", sty.cartItem)}
                    title={"Eternity NITRO Men's Running Shoes"}
                  />
                ) : null}

                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(
                    defaultcss.all,
                    projectcss.all,
                    sty.freeBox__nghLa
                  )}
                >
                  <div
                    className={classNames(
                      defaultcss.all,
                      projectcss.all,
                      defaultcss.__wab_text,
                      sty.text__xTroY
                    )}
                  >
                    {
                      "You're not the owner of the physical NFT, but you can still enjoy exploring the item online or even make an offer to purchase the physical item."
                    }
                  </div>

                  <div
                    data-plasmic-name={"nftContainer"}
                    data-plasmic-override={overrides.nftContainer}
                    className={classNames(
                      defaultcss.all,
                      projectcss.all,
                      sty.nftContainer
                    )}
                  >
                    <NftCard
                      data-plasmic-name={"nftCard"}
                      data-plasmic-override={overrides.nftCard}
                      className={classNames("__wab_instance", sty.nftCard)}
                      rating={
                        true ? (
                          <Rating
                            data-plasmic-name={"rating"}
                            data-plasmic-override={overrides.rating}
                            className={classNames("__wab_instance", sty.rating)}
                          />
                        ) : null
                      }
                      tags={
                        true ? (
                          <Button
                            className={classNames(
                              "__wab_instance",
                              sty.button__q8Jmw
                            )}
                            colors={"lightGray"}
                            size={"small"}
                          >
                            {"New"}
                          </Button>
                        ) : null
                      }
                    />
                  </div>
                </p.Stack>

                {false ? (
                  <div
                    className={classNames(
                      defaultcss.all,
                      projectcss.all,
                      sty.freeBox__vpVE
                    )}
                  />
                ) : null}
              </p.Stack>

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(
                  defaultcss.all,
                  projectcss.all,
                  sty.freeBox__j6IIz
                )}
              >
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(
                    defaultcss.all,
                    projectcss.all,
                    sty.freeBox__rcaCa
                  )}
                >
                  <div
                    className={classNames(
                      defaultcss.all,
                      projectcss.all,
                      defaultcss.__wab_text,
                      sty.text__iv25G
                    )}
                  >
                    {"Wallet"}
                  </div>

                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(
                      defaultcss.all,
                      projectcss.all,
                      sty.freeBox__tRwVm
                    )}
                  >
                    <div
                      className={classNames(
                        defaultcss.all,
                        projectcss.all,
                        sty.freeBox__z1XWe
                      )}
                    >
                      <div
                        className={classNames(
                          defaultcss.all,
                          projectcss.all,
                          sty.freeBox___5GwbQ
                        )}
                      >
                        {p.renderPlasmicSlot({
                          defaultContents: "Balance",
                          value: args.slot5,
                          className: classNames(sty.slotTargetSlot5)
                        })}
                      </div>

                      <div
                        className={classNames(
                          defaultcss.all,
                          projectcss.all,
                          sty.freeBox__nd2Pe
                        )}
                      >
                        {(
                          hasVariant(globalVariants, "screen", "mobileOnly")
                            ? true
                            : true
                        ) ? (
                          <div
                            data-plasmic-name={"balanceText"}
                            data-plasmic-override={overrides.balanceText}
                            className={classNames(
                              defaultcss.all,
                              projectcss.all,
                              defaultcss.__wab_text,
                              sty.balanceText
                            )}
                          >
                            {""}
                          </div>
                        ) : null}
                      </div>
                    </div>

                    <Separator
                      className={classNames(
                        "__wab_instance",
                        sty.separator__x0EQ
                      )}
                      dark={"dark"}
                    />

                    <div
                      className={classNames(
                        defaultcss.all,
                        projectcss.all,
                        defaultcss.__wab_text,
                        sty.text__yEt2W
                      )}
                    >
                      {"Actions"}
                    </div>

                    <div
                      className={classNames(
                        defaultcss.all,
                        projectcss.all,
                        sty.freeBox___9YAlo
                      )}
                    >
                      <div
                        data-plasmic-name={"columns"}
                        data-plasmic-override={overrides.columns}
                        className={classNames(
                          defaultcss.all,
                          projectcss.all,
                          sty.columns
                        )}
                      >
                        <div
                          className={classNames(
                            defaultcss.all,
                            projectcss.all,
                            sty.column__ho56W
                          )}
                        >
                          {true ? (
                            <Button
                              data-plasmic-name={"likeButton"}
                              data-plasmic-override={overrides.likeButton}
                              className={classNames(
                                "__wab_instance",
                                sty.likeButton
                              )}
                              colors={"lightGrayOutline"}
                              iconOnly={"iconOnly"}
                              size={"small"}
                              startIcon={
                                <LikeIcon
                                  className={classNames(
                                    defaultcss.all,
                                    projectcss.all,
                                    sty.svg__xQnYf
                                  )}
                                  role={"img"}
                                />
                              }
                            />
                          ) : null}
                        </div>

                        <div
                          className={classNames(
                            defaultcss.all,
                            projectcss.all,
                            sty.column__rcMb
                          )}
                        >
                          <Button
                            className={classNames(
                              "__wab_instance",
                              sty.button__rdbhu
                            )}
                            colors={"blue"}
                            rounded={"rounded"}
                            size={"small"}
                          >
                            {"Make Offer"}
                          </Button>
                        </div>
                      </div>
                    </div>

                    <Button
                      className={classNames(
                        "__wab_instance",
                        sty.button__l4S5J
                      )}
                      colors={"link"}
                    >
                      <div
                        className={classNames(
                          defaultcss.all,
                          projectcss.all,
                          defaultcss.__wab_text,
                          sty.text___3YUm
                        )}
                      >
                        {"Logout"}
                      </div>
                    </Button>

                    <Separator
                      className={classNames(
                        "__wab_instance",
                        sty.separator__r1TBu
                      )}
                      dark={"dark"}
                    />

                    {false
                      ? p.renderPlasmicSlot({
                          defaultContents: true ? (
                            <Button
                              className={classNames(
                                "__wab_instance",
                                sty.button__xQau
                              )}
                              colors={"blue"}
                              rounded={"rounded"}
                              size={"large"}
                            >
                              <div
                                className={classNames(
                                  defaultcss.all,
                                  projectcss.all,
                                  defaultcss.__wab_text,
                                  sty.text__wmaaG
                                )}
                              >
                                {"Checkout"}
                              </div>
                            </Button>
                          ) : null,
                          value: args.slot3
                        })
                      : null}

                    <p.Stack
                      as={"div"}
                      hasGap={true}
                      className={classNames(
                        defaultcss.all,
                        projectcss.all,
                        sty.freeBox__mZdDd
                      )}
                    >
                      <Secure2Icon
                        className={classNames(
                          defaultcss.all,
                          projectcss.all,
                          sty.svg__udmup
                        )}
                        role={"img"}
                      />

                      {true ? (
                        <div
                          className={classNames(
                            defaultcss.all,
                            projectcss.all,
                            defaultcss.__wab_text,
                            sty.text__xh5OC
                          )}
                        >
                          {"Secure"}
                        </div>
                      ) : null}
                    </p.Stack>
                  </p.Stack>
                </p.Stack>

                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(
                    defaultcss.all,
                    projectcss.all,
                    sty.freeBox__lQaFa
                  )}
                >
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__d6Uyc)}
                    displayHeight={"auto"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"none"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"48px"}
                    loader={"plasmic"}
                    src={{
                      src: "https://site-assets.plasmic.app/beb7e86b74a29534cecf32e6c766cc8c.svg",
                      fullWidth: 210,
                      fullHeight: 150,
                      aspectRatio: 1.4
                    }}
                  />

                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__ijojq)}
                    displayHeight={"auto"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"none"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"48px"}
                    loader={"plasmic"}
                    src={{
                      src: "https://site-assets.plasmic.app/3711b27f804ad7155dc1652e18a22e83.svg",
                      fullWidth: 210,
                      fullHeight: 150,
                      aspectRatio: 1.4
                    }}
                  />

                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__pHjDc)}
                    displayHeight={"auto"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"none"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"48px"}
                    loader={"plasmic"}
                    src={{
                      src: "https://site-assets.plasmic.app/2eadd1488206ecaf8278c9329858061c.svg",
                      fullWidth: 210,
                      fullHeight: 150,
                      aspectRatio: 1.4
                    }}
                  />

                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__nJyeW)}
                    displayHeight={"auto"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"none"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"48px"}
                    loader={"plasmic"}
                    src={{
                      src: "https://site-assets.plasmic.app/189b4621c4c663bcb23e300fd33b69a6.svg",
                      fullWidth: 213,
                      fullHeight: 150,
                      aspectRatio: 1.416667
                    }}
                  />
                </p.Stack>
              </p.Stack>
            </p.Stack>

            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(
                defaultcss.all,
                projectcss.all,
                sty.freeBox__oOh1
              )}
            >
              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img__zuJsJ)}
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
                  sty.freeBox__z2Gu
                )}
              >
                <div
                  className={classNames(
                    defaultcss.all,
                    projectcss.all,
                    defaultcss.__wab_text,
                    sty.text__cqdlN
                  )}
                >
                  {"1% of your purchase will go to a grassroot organization."}
                </div>

                <Button
                  className={classNames("__wab_instance", sty.button__d93GC)}
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
    "cartItem",
    "nftContainer",
    "nftCard",
    "rating",
    "balanceText",
    "columns",
    "likeButton",
    "footer"
  ],

  navBar: ["navBar"],
  section: [
    "section",
    "cartItem",
    "nftContainer",
    "nftCard",
    "rating",
    "balanceText",
    "columns",
    "likeButton"
  ],

  cartItem: ["cartItem"],
  nftContainer: ["nftContainer", "nftCard", "rating"],
  nftCard: ["nftCard", "rating"],
  rating: ["rating"],
  balanceText: ["balanceText"],
  columns: ["columns", "likeButton"],
  likeButton: ["likeButton"],
  footer: ["footer"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicNotOwner__ArgProps,
      internalVariantPropNames: PlasmicNotOwner__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicNotOwner__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNotOwner";
  } else {
    func.displayName = `PlasmicNotOwner.${nodeName}`;
  }
  return func;
}

export const PlasmicNotOwner = Object.assign(
  // Top-level PlasmicNotOwner renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navBar: makeNodeComponent("navBar"),
    section: makeNodeComponent("section"),
    cartItem: makeNodeComponent("cartItem"),
    nftContainer: makeNodeComponent("nftContainer"),
    nftCard: makeNodeComponent("nftCard"),
    rating: makeNodeComponent("rating"),
    balanceText: makeNodeComponent("balanceText"),
    columns: makeNodeComponent("columns"),
    likeButton: makeNodeComponent("likeButton"),
    footer: makeNodeComponent("footer"),
    // Metadata about props expected for PlasmicNotOwner
    internalVariantProps: PlasmicNotOwner__VariantProps,
    internalArgProps: PlasmicNotOwner__ArgProps
  }
);

export default PlasmicNotOwner;
/* prettier-ignore-end */