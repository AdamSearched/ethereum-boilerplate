// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: wsRXF2j5MAPa2EH2XkCbWH
// Component: gtvxf4CXKCY
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
import Button from "../../Button"; // plasmic-import: LPkJNTjVmA5d/component
import Separator from "../../Separator"; // plasmic-import: a3Y-HjSmFyWC/component
import NftCard from "../../NftCard"; // plasmic-import: 4WAwdYQPvRJW/component
import Rating from "../../Rating"; // plasmic-import: 1Xj9IcyNJkl8/component
import Footer from "../../Footer"; // plasmic-import: XC4xprCxMga4/component
import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: k702YoelP3ze/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_ecommerce_starter.module.css"; // plasmic-import: wsRXF2j5MAPa2EH2XkCbWH/projectcss
import * as sty from "./PlasmicWallet.module.css"; // plasmic-import: gtvxf4CXKCY/css
import CashIcon from "./icons/PlasmicIcon__Cash"; // plasmic-import: LxjWj4rgvA1I/icon
import Secure2Icon from "./icons/PlasmicIcon__Secure2"; // plasmic-import: xk-FIjWptLhs/icon

export const PlasmicWallet__VariantProps = new Array();

export const PlasmicWallet__ArgProps = new Array("slot2", "slot3", "slot5");

function PlasmicWallet__RenderFunc(props) {
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
                sty.freeBox__wwCcM
              )}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(
                  defaultcss.all,
                  projectcss.all,
                  sty.freeBox__h9Lq6
                )}
              >
                <div
                  className={classNames(
                    defaultcss.all,
                    projectcss.all,
                    defaultcss.__wab_text,
                    sty.text__tBcSa
                  )}
                >
                  {"Your Owned Assets"}
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
                    sty.freeBox__pb5Um
                  )}
                >
                  <div
                    className={classNames(
                      defaultcss.all,
                      projectcss.all,
                      defaultcss.__wab_text,
                      sty.text__frKxh
                    )}
                  >
                    {
                      "NFTs held in your wallet are available here to view, resell, send or even handle financial options."
                    }
                  </div>
                </p.Stack>

                {false ? (
                  <div
                    className={classNames(
                      defaultcss.all,
                      projectcss.all,
                      sty.freeBox__k9B8U
                    )}
                  />
                ) : null}

                <div
                  className={classNames(
                    defaultcss.all,
                    projectcss.all,
                    sty.freeBox__ju6AC
                  )}
                >
                  <Button
                    className={classNames("__wab_instance", sty.button__mNyb)}
                    colors={"black"}
                    link={"/mint"}
                    rounded={"rounded"}
                    showStartIcon={"showStartIcon"}
                    startIcon={
                      <CashIcon
                        className={classNames(
                          defaultcss.all,
                          projectcss.all,
                          sty.svg__xb0T9
                        )}
                        role={"img"}
                      />
                    }
                  >
                    {"Mint"}
                  </Button>
                </div>
              </p.Stack>

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(
                  defaultcss.all,
                  projectcss.all,
                  sty.freeBox__tuJxq
                )}
              >
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(
                    defaultcss.all,
                    projectcss.all,
                    sty.freeBox__dUhyo
                  )}
                >
                  <div
                    className={classNames(
                      defaultcss.all,
                      projectcss.all,
                      defaultcss.__wab_text,
                      sty.text__qa4Gt
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
                      sty.freeBox__jJi4L
                    )}
                  >
                    <div
                      className={classNames(
                        defaultcss.all,
                        projectcss.all,
                        sty.freeBox__fVq9B
                      )}
                    >
                      <div
                        className={classNames(
                          defaultcss.all,
                          projectcss.all,
                          sty.freeBox__zT3Vp
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
                          sty.freeBox___3Yq2M
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

                    <div
                      className={classNames(
                        defaultcss.all,
                        projectcss.all,
                        sty.freeBox__fuDiJ
                      )}
                    >
                      <div
                        className={classNames(
                          defaultcss.all,
                          projectcss.all,
                          sty.freeBox__vH42K
                        )}
                      >
                        {p.renderPlasmicSlot({
                          defaultContents: "-",
                          value: args.slot2,
                          className: classNames(sty.slotTargetSlot2)
                        })}
                      </div>
                    </div>

                    <Button
                      className={classNames(
                        "__wab_instance",
                        sty.button__iplbw
                      )}
                      colors={"link"}
                    >
                      <div
                        data-plasmic-name={"walletLogout"}
                        data-plasmic-override={overrides.walletLogout}
                        className={classNames(
                          defaultcss.all,
                          projectcss.all,
                          defaultcss.__wab_text,
                          sty.walletLogout
                        )}
                      >
                        {"Disconnect"}
                      </div>
                    </Button>

                    <Separator
                      data-plasmic-name={"separator"}
                      data-plasmic-override={overrides.separator}
                      className={classNames("__wab_instance", sty.separator)}
                      dark={"dark"}
                    />

                    {false
                      ? p.renderPlasmicSlot({
                          defaultContents: true ? (
                            <Button
                              className={classNames(
                                "__wab_instance",
                                sty.button__iiDMb
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
                                  sty.text__t314K
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
                        sty.freeBox__pUk0E
                      )}
                    >
                      <Secure2Icon
                        className={classNames(
                          defaultcss.all,
                          projectcss.all,
                          sty.svg__dwf0Z
                        )}
                        role={"img"}
                      />

                      {true ? (
                        <div
                          className={classNames(
                            defaultcss.all,
                            projectcss.all,
                            defaultcss.__wab_text,
                            sty.text__nOcXo
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
                    sty.freeBox__zfgTc
                  )}
                >
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__eZ1Yy)}
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
                    className={classNames(sty.img__vOrxi)}
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
                    className={classNames(sty.img__sEziH)}
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
                    className={classNames(sty.img__yvwF)}
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
                        sty.button__heSrH
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

            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(
                defaultcss.all,
                projectcss.all,
                sty.freeBox__kNk1H
              )}
            >
              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img___5CU51)}
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
                  sty.freeBox__uGcVv
                )}
              >
                <div
                  className={classNames(
                    defaultcss.all,
                    projectcss.all,
                    defaultcss.__wab_text,
                    sty.text__g70RI
                  )}
                >
                  {"1% of your purchase will go to a grassroot organization."}
                </div>

                <Button
                  className={classNames("__wab_instance", sty.button__qrAja)}
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
    "balanceText",
    "walletLogout",
    "separator",
    "nftContainer",
    "nftCard",
    "rating",
    "footer"
  ],

  navBar: ["navBar"],
  section: [
    "section",
    "cartItem",
    "balanceText",
    "walletLogout",
    "separator",
    "nftContainer",
    "nftCard",
    "rating"
  ],

  cartItem: ["cartItem"],
  balanceText: ["balanceText"],
  walletLogout: ["walletLogout"],
  separator: ["separator"],
  nftContainer: ["nftContainer", "nftCard", "rating"],
  nftCard: ["nftCard", "rating"],
  rating: ["rating"],
  footer: ["footer"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicWallet__ArgProps,
      internalVariantPropNames: PlasmicWallet__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicWallet__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicWallet";
  } else {
    func.displayName = `PlasmicWallet.${nodeName}`;
  }
  return func;
}

export const PlasmicWallet = Object.assign(
  // Top-level PlasmicWallet renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navBar: makeNodeComponent("navBar"),
    section: makeNodeComponent("section"),
    cartItem: makeNodeComponent("cartItem"),
    balanceText: makeNodeComponent("balanceText"),
    walletLogout: makeNodeComponent("walletLogout"),
    separator: makeNodeComponent("separator"),
    nftContainer: makeNodeComponent("nftContainer"),
    nftCard: makeNodeComponent("nftCard"),
    rating: makeNodeComponent("rating"),
    footer: makeNodeComponent("footer"),
    // Metadata about props expected for PlasmicWallet
    internalVariantProps: PlasmicWallet__VariantProps,
    internalArgProps: PlasmicWallet__ArgProps
  }
);

export default PlasmicWallet;
/* prettier-ignore-end */
