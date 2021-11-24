// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: wsRXF2j5MAPa2EH2XkCbWH
// Component: nXqn6U20uS6-
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import NavBar from "../../NavBar"; // plasmic-import: HJQvpfJRA4yw/component
import Button from "../../Button"; // plasmic-import: LPkJNTjVmA5d/component
import NftTransfers from "../../NftTransfers"; // plasmic-import: ymFVcsc07v/component
import Price from "../../Price"; // plasmic-import: kXXSiZzhuJHJ/component
import Select from "../../Select"; // plasmic-import: Gvwa1hVDjNxF/component
import Select__Option from "../../Select__Option"; // plasmic-import: sXUrTJOQrB6Q/component
import Separator from "../../Separator"; // plasmic-import: a3Y-HjSmFyWC/component
import NftCard from "../../NftCard"; // plasmic-import: 4WAwdYQPvRJW/component
import Footer from "../../Footer"; // plasmic-import: XC4xprCxMga4/component
import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: k702YoelP3ze/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_ecommerce_starter.module.css"; // plasmic-import: wsRXF2j5MAPa2EH2XkCbWH/projectcss
import * as sty from "./PlasmicItem.module.css"; // plasmic-import: nXqn6U20uS6-/css
import HomeIcon from "./icons/PlasmicIcon__Home"; // plasmic-import: xGR87mEf2QZ-/icon
import SecureIcon from "./icons/PlasmicIcon__Secure"; // plasmic-import: 9YAqV-BggB1W/icon
import LikeIcon from "./icons/PlasmicIcon__Like"; // plasmic-import: mpxlxEDeHDVB/icon
import RightArrowIcon from "./icons/PlasmicIcon__RightArrow"; // plasmic-import: sth0rOpjGBUT/icon

export const PlasmicItem__VariantProps = new Array();

export const PlasmicItem__ArgProps = new Array("container42");

function PlasmicItem__RenderFunc(props) {
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

          <section
            className={classNames(
              defaultcss.all,
              projectcss.all,
              sty.section__qtY
            )}
          >
            <p.Stack
              as={"div"}
              data-plasmic-name={"container432"}
              data-plasmic-override={overrides.container432}
              hasGap={true}
              className={classNames(
                defaultcss.all,
                projectcss.all,
                sty.container432
              )}
            >
              <Button
                startIcon={
                  <HomeIcon
                    className={classNames(
                      defaultcss.all,
                      projectcss.all,
                      sty.svg__s06Ef
                    )}
                    role={"img"}
                  />
                }
              >
                {"NFTs"}
              </Button>

              <div
                className={classNames(
                  defaultcss.all,
                  projectcss.all,
                  defaultcss.__wab_text,
                  sty.text__lR41G
                )}
              >
                {"/"}
              </div>

              <Button
                startIcon={
                  <HomeIcon
                    className={classNames(
                      defaultcss.all,
                      projectcss.all,
                      sty.svg___3Rho0
                    )}
                    role={"img"}
                  />
                }
              >
                {"Shoes"}
              </Button>
            </p.Stack>
          </section>

          <section
            className={classNames(
              defaultcss.all,
              projectcss.all,
              sty.section___9Rzt9
            )}
          >
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(
                defaultcss.all,
                projectcss.all,
                sty.freeBox__l7S9R
              )}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(
                  defaultcss.all,
                  projectcss.all,
                  sty.freeBox___85DTd
                )}
              >
                <p.PlasmicImg
                  data-plasmic-name={"nftImagePage"}
                  data-plasmic-override={overrides.nftImagePage}
                  alt={""}
                  className={classNames(sty.nftImagePage)}
                  displayHeight={"auto"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"none"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"auto"}
                  loader={"plasmic"}
                  src={{
                    src: "https://img.plasmic.app/img-optimizer/v1/img/01e044c656d391a2a8103fc2fb468f75.png",
                    fullWidth: 2000,
                    fullHeight: 2000
                  }}
                />

                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(
                    defaultcss.all,
                    projectcss.all,
                    sty.freeBox__coO5R
                  )}
                >
                  <div
                    className={classNames(
                      defaultcss.all,
                      projectcss.all,
                      sty.freeBox__wt1Zt
                    )}
                  >
                    <div
                      className={classNames(
                        defaultcss.all,
                        projectcss.all,
                        defaultcss.__wab_text,
                        sty.text__jYkoj
                      )}
                    >
                      {"History"}
                    </div>

                    <NftTransfers
                      data-plasmic-name={"nftTransfers"}
                      data-plasmic-override={overrides.nftTransfers}
                      className={classNames("__wab_instance", sty.nftTransfers)}
                    />
                  </div>
                </p.Stack>
              </p.Stack>

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(
                  defaultcss.all,
                  projectcss.all,
                  sty.freeBox__onfwr
                )}
              >
                <div
                  data-plasmic-name={"nftNamePage"}
                  data-plasmic-override={overrides.nftNamePage}
                  className={classNames(
                    defaultcss.all,
                    projectcss.all,
                    defaultcss.__wab_text,
                    sty.nftNamePage
                  )}
                >
                  {"name"}
                </div>

                <div
                  className={classNames(
                    defaultcss.all,
                    projectcss.all,
                    sty.freeBox__vkHsf
                  )}
                >
                  <SecureIcon
                    className={classNames(
                      defaultcss.all,
                      projectcss.all,
                      sty.svg__lAccy
                    )}
                    role={"img"}
                  />

                  <div
                    data-plasmic-name={"auth"}
                    data-plasmic-override={overrides.auth}
                    className={classNames(
                      defaultcss.all,
                      projectcss.all,
                      defaultcss.__wab_text,
                      sty.auth
                    )}
                  >
                    {"Authenticated Item"}
                  </div>
                </div>

                <div
                  data-plasmic-name={"ownerAuth"}
                  data-plasmic-override={overrides.ownerAuth}
                  className={classNames(
                    defaultcss.all,
                    projectcss.all,
                    defaultcss.__wab_text,
                    sty.ownerAuth
                  )}
                >
                  {"..."}
                </div>

                <div
                  className={classNames(
                    defaultcss.all,
                    projectcss.all,
                    sty.freeBox__rdgQ
                  )}
                >
                  <div
                    className={classNames(
                      defaultcss.all,
                      projectcss.all,
                      defaultcss.__wab_text,
                      sty.text__p1Riu
                    )}
                  >
                    {"Value"}
                  </div>

                  <Price
                    data-plasmic-name={"price"}
                    data-plasmic-override={overrides.price}
                    className={classNames("__wab_instance", sty.price)}
                    dollars={
                      <div
                        data-plasmic-name={"nftPrice"}
                        data-plasmic-override={overrides.nftPrice}
                        className={classNames(
                          defaultcss.all,
                          projectcss.all,
                          defaultcss.__wab_text,
                          sty.nftPrice
                        )}
                      >
                        {"0"}
                      </div>
                    }
                  />
                </div>

                {true ? (
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(
                      defaultcss.all,
                      projectcss.all,
                      sty.freeBox__aLaz
                    )}
                  >
                    <div
                      className={classNames(
                        defaultcss.all,
                        projectcss.all,
                        defaultcss.__wab_text,
                        sty.text___67ReZ
                      )}
                    >
                      {"Size"}
                    </div>

                    {true ? (
                      <p.Stack
                        as={"div"}
                        hasGap={true}
                        className={classNames(
                          defaultcss.all,
                          projectcss.all,
                          sty.freeBox__tyclg
                        )}
                      >
                        <Button colors={"lightGrayOutline"}>{"7"}</Button>

                        <Button colors={"lightGrayOutline"}>
                          <div
                            className={classNames(
                              defaultcss.all,
                              projectcss.all,
                              defaultcss.__wab_text,
                              sty.text___6WkKe
                            )}
                          >
                            {"7.5"}
                          </div>
                        </Button>

                        <Button colors={"lightGrayOutline"}>
                          <div
                            className={classNames(
                              defaultcss.all,
                              projectcss.all,
                              defaultcss.__wab_text,
                              sty.text__axhtr
                            )}
                          >
                            {"8"}
                          </div>
                        </Button>

                        <Button colors={"lightGrayOutline"}>
                          <div
                            className={classNames(
                              defaultcss.all,
                              projectcss.all,
                              defaultcss.__wab_text,
                              sty.text__b5QV7
                            )}
                          >
                            {"8.5"}
                          </div>
                        </Button>

                        <Button colors={"lightGrayOutline"}>
                          <div
                            className={classNames(
                              defaultcss.all,
                              projectcss.all,
                              defaultcss.__wab_text,
                              sty.text__reT8R
                            )}
                          >
                            {"9"}
                          </div>
                        </Button>

                        <Button colors={"lightGrayOutline"}>
                          <div
                            className={classNames(
                              defaultcss.all,
                              projectcss.all,
                              defaultcss.__wab_text,
                              sty.text__aAo75
                            )}
                          >
                            {"9.5"}
                          </div>
                        </Button>

                        <Button colors={"lightGrayOutline"}>
                          <div
                            className={classNames(
                              defaultcss.all,
                              projectcss.all,
                              defaultcss.__wab_text,
                              sty.text__iMjEx
                            )}
                          >
                            {"10"}
                          </div>
                        </Button>

                        <Button colors={"lightGrayOutline"}>
                          <div
                            className={classNames(
                              defaultcss.all,
                              projectcss.all,
                              defaultcss.__wab_text,
                              sty.text__rO67P
                            )}
                          >
                            {"10.5"}
                          </div>
                        </Button>

                        <Button colors={"lightGrayOutline"}>
                          <div
                            className={classNames(
                              defaultcss.all,
                              projectcss.all,
                              defaultcss.__wab_text,
                              sty.text__dLcE9
                            )}
                          >
                            {"11"}
                          </div>
                        </Button>

                        <Button colors={"lightGrayOutline"}>
                          <div
                            className={classNames(
                              defaultcss.all,
                              projectcss.all,
                              defaultcss.__wab_text,
                              sty.text__pnsVd
                            )}
                          >
                            {"11.5"}
                          </div>
                        </Button>

                        <Button colors={"lightGrayOutline"}>
                          <div
                            className={classNames(
                              defaultcss.all,
                              projectcss.all,
                              defaultcss.__wab_text,
                              sty.text__lgrV
                            )}
                          >
                            {"12"}
                          </div>
                        </Button>

                        <Button colors={"lightGrayOutline"}>
                          <div
                            className={classNames(
                              defaultcss.all,
                              projectcss.all,
                              defaultcss.__wab_text,
                              sty.text__mWydS
                            )}
                          >
                            {"13"}
                          </div>
                        </Button>

                        <Button colors={"lightGrayOutline"}>
                          <div
                            className={classNames(
                              defaultcss.all,
                              projectcss.all,
                              defaultcss.__wab_text,
                              sty.text__tsHvl
                            )}
                          >
                            {"14"}
                          </div>
                        </Button>
                      </p.Stack>
                    ) : null}
                  </p.Stack>
                ) : null}

                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(
                    defaultcss.all,
                    projectcss.all,
                    sty.freeBox__ix6Ea
                  )}
                >
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(
                      defaultcss.all,
                      projectcss.all,
                      sty.freeBox__hpE4E
                    )}
                  >
                    <div
                      className={classNames(
                        defaultcss.all,
                        projectcss.all,
                        defaultcss.__wab_text,
                        sty.text__zIiHi
                      )}
                    >
                      {"Quantity"}
                    </div>

                    <div
                      data-plasmic-name={"nftQuantityPage"}
                      data-plasmic-override={overrides.nftQuantityPage}
                      className={classNames(
                        defaultcss.all,
                        projectcss.all,
                        defaultcss.__wab_text,
                        sty.nftQuantityPage
                      )}
                    >
                      {"0"}
                    </div>

                    {true ? (
                      <Select
                        data-plasmic-name={"quantity"}
                        data-plasmic-override={overrides.quantity}
                        className={classNames("__wab_instance", sty.quantity)}
                        defaultValue={"1"}
                      >
                        <Select__Option
                          className={classNames(
                            "__wab_instance",
                            sty.option__xJ2MP
                          )}
                          value={"1"}
                        >
                          {"1"}
                        </Select__Option>

                        <Select__Option
                          className={classNames(
                            "__wab_instance",
                            sty.option___72CNo
                          )}
                          value={"2"}
                        >
                          {"2"}
                        </Select__Option>

                        <Select__Option
                          className={classNames(
                            "__wab_instance",
                            sty.option__gQ5Ev
                          )}
                          value={"3"}
                        >
                          {"3"}
                        </Select__Option>

                        <Select__Option
                          className={classNames(
                            "__wab_instance",
                            sty.option__xqkbz
                          )}
                          value={"4"}
                        >
                          {"4"}
                        </Select__Option>

                        <Select__Option
                          className={classNames(
                            "__wab_instance",
                            sty.option__vJ5Gw
                          )}
                          value={"5"}
                        >
                          {"5"}
                        </Select__Option>
                      </Select>
                    ) : null}
                  </p.Stack>

                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(
                      defaultcss.all,
                      projectcss.all,
                      sty.freeBox__c6GdC
                    )}
                  >
                    {true ? (
                      <Button
                        data-plasmic-name={"likeButton"}
                        data-plasmic-override={overrides.likeButton}
                        className={classNames("__wab_instance", sty.likeButton)}
                        colors={"lightGrayOutline"}
                        iconOnly={"iconOnly"}
                        size={"large"}
                        startIcon={
                          <LikeIcon
                            className={classNames(
                              defaultcss.all,
                              projectcss.all,
                              sty.svg__cp8Wf
                            )}
                            role={"img"}
                          />
                        }
                      />
                    ) : null}

                    <Button
                      data-plasmic-name={"addToCartButton"}
                      data-plasmic-override={overrides.addToCartButton}
                      colors={"black"}
                      link={"/scan?product=true"}
                      rounded={"rounded"}
                      size={"small"}
                    >
                      {"Scan it"}
                    </Button>

                    <Button
                      className={classNames(
                        "__wab_instance",
                        sty.button__nmmch
                      )}
                      colors={"blue"}
                      rounded={"rounded"}
                      size={"small"}
                    >
                      {"Buy It"}
                    </Button>
                  </p.Stack>
                </p.Stack>

                <Separator
                  className={classNames("__wab_instance", sty.separator__yxUsn)}
                />

                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(
                    defaultcss.all,
                    projectcss.all,
                    sty.freeBox__ojyMd
                  )}
                >
                  <div
                    className={classNames(
                      defaultcss.all,
                      projectcss.all,
                      defaultcss.__wab_text,
                      sty.text__ekWq4
                    )}
                  >
                    {"Description"}
                  </div>

                  <div
                    data-plasmic-name={"nftDescriptionPage"}
                    data-plasmic-override={overrides.nftDescriptionPage}
                    className={classNames(
                      defaultcss.all,
                      projectcss.all,
                      defaultcss.__wab_text,
                      sty.nftDescriptionPage
                    )}
                  >
                    {""}
                  </div>
                </p.Stack>

                <Separator
                  className={classNames("__wab_instance", sty.separator__y2Ygm)}
                />

                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(
                    defaultcss.all,
                    projectcss.all,
                    sty.freeBox___8No0Y
                  )}
                >
                  <div
                    className={classNames(
                      defaultcss.all,
                      projectcss.all,
                      defaultcss.__wab_text,
                      sty.text__xkaFy
                    )}
                  >
                    {"Details"}
                  </div>

                  <div
                    data-plasmic-name={"details"}
                    data-plasmic-override={overrides.details}
                    className={classNames(
                      defaultcss.all,
                      projectcss.all,
                      sty.details
                    )}
                  >
                    <div
                      className={classNames(
                        defaultcss.all,
                        projectcss.all,
                        defaultcss.__wab_text,
                        sty.text__xv9Cb
                      )}
                    >
                      {
                        "Connect your wallet if you're the owner or wish to make an offer on the item"
                      }
                    </div>

                    <Separator
                      className={classNames(
                        "__wab_instance",
                        sty.separator__nhOa7
                      )}
                    />

                    <div
                      className={classNames(
                        defaultcss.all,
                        projectcss.all,
                        defaultcss.__wab_text,
                        sty.text__krMzm
                      )}
                    >
                      {
                        "Second scan the item if you're the owner to unlock additional features"
                      }
                    </div>

                    <Separator
                      className={classNames(
                        "__wab_instance",
                        sty.separator__ydvfM
                      )}
                    />
                  </div>
                </p.Stack>
              </p.Stack>
            </p.Stack>
          </section>

          <section
            className={classNames(
              defaultcss.all,
              projectcss.all,
              sty.section___0RYgd
            )}
          >
            <div
              data-plasmic-name={"container42"}
              data-plasmic-override={overrides.container42}
              className={classNames(
                defaultcss.all,
                projectcss.all,
                sty.container42
              )}
            >
              {p.renderPlasmicSlot({
                defaultContents: (
                  <div
                    className={classNames(
                      defaultcss.all,
                      projectcss.all,
                      sty.freeBox__qjb11
                    )}
                  >
                    <div
                      className={classNames(
                        defaultcss.all,
                        projectcss.all,
                        defaultcss.__wab_text,
                        sty.text__fijl
                      )}
                    >
                      {"You may also like"}
                    </div>

                    <Button
                      className={classNames(
                        "__wab_instance",
                        sty.button__c9M8H
                      )}
                      colors={"link"}
                      endIcon={
                        <RightArrowIcon
                          className={classNames(
                            defaultcss.all,
                            projectcss.all,
                            sty.svg__uOyxe
                          )}
                          role={"img"}
                        />
                      }
                      showEndIcon={"showEndIcon"}
                    >
                      {"See more"}
                    </Button>
                  </div>
                ),

                value: args.container42
              })}
            </div>

            <div
              data-plasmic-name={"container5"}
              data-plasmic-override={overrides.container5}
              className={classNames(
                defaultcss.all,
                projectcss.all,
                sty.container5
              )}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(
                  defaultcss.all,
                  projectcss.all,
                  sty.freeBox__s8OrI
                )}
              >
                <NftCard
                  img={{
                    src: "https://img.plasmic.app/img-optimizer/v1/img/aca490781ed5cdb4bc673dfbf6446fb4.png",
                    fullWidth: 840,
                    fullHeight: 840
                  }}
                  link={"http://google.com"}
                  tags={
                    <Button colors={"lightGray"} size={"small"}>
                      {"New"}
                    </Button>
                  }
                />

                <NftCard
                  className={classNames("__wab_instance", sty.nftCard__oTz4)}
                  img={{
                    src: "https://img.plasmic.app/img-optimizer/v1/img/27587210711d41af77703fb12e0df8f4.png",
                    fullWidth: 864,
                    fullHeight: 1080
                  }}
                  link={"/item"}
                  tags={
                    <Button colors={"lightGray"} size={"small"}>
                      {"New"}
                    </Button>
                  }
                />

                <NftCard
                  className={classNames("__wab_instance", sty.nftCard__muuJ)}
                  img={{
                    src: "https://img.plasmic.app/img-optimizer/v1/img/d1a314023737aac5a73fede7f1ef1e00.png",
                    fullWidth: 840,
                    fullHeight: 840
                  }}
                  link={"/item"}
                  tags={
                    <Button colors={"lightGray"} size={"small"}>
                      {"New"}
                    </Button>
                  }
                />

                <NftCard
                  className={classNames("__wab_instance", sty.nftCard__nTpK)}
                  img={{
                    src: "https://img.plasmic.app/img-optimizer/v1/img/946b8531b58062ba8a6a94192775b40a.png",
                    fullWidth: 864,
                    fullHeight: 1080
                  }}
                  link={"/item"}
                  tags={
                    <Button colors={"lightGray"} size={"small"}>
                      {"New"}
                    </Button>
                  }
                />

                <NftCard
                  className={classNames("__wab_instance", sty.nftCard__egmst)}
                  img={{
                    src: "https://img.plasmic.app/img-optimizer/v1/img/23e46f1954faac60c6dd6d1923dab092.png",
                    fullWidth: 840,
                    fullHeight: 840
                  }}
                  link={"/item"}
                  tags={
                    <Button colors={"lightGray"} size={"small"}>
                      {"New"}
                    </Button>
                  }
                />

                <NftCard
                  className={classNames("__wab_instance", sty.nftCard__d054O)}
                  link={"/item"}
                  tags={
                    <Button colors={"lightGray"} size={"small"}>
                      {"New"}
                    </Button>
                  }
                />
              </p.Stack>
            </div>
          </section>

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
    "container432",
    "nftImagePage",
    "nftTransfers",
    "nftNamePage",
    "auth",
    "ownerAuth",
    "price",
    "nftPrice",
    "nftQuantityPage",
    "quantity",
    "likeButton",
    "addToCartButton",
    "nftDescriptionPage",
    "details",
    "container42",
    "container5",
    "footer"
  ],

  navBar: ["navBar"],
  container432: ["container432"],
  nftImagePage: ["nftImagePage"],
  nftTransfers: ["nftTransfers"],
  nftNamePage: ["nftNamePage"],
  auth: ["auth"],
  ownerAuth: ["ownerAuth"],
  price: ["price", "nftPrice"],
  nftPrice: ["nftPrice"],
  nftQuantityPage: ["nftQuantityPage"],
  quantity: ["quantity"],
  likeButton: ["likeButton"],
  addToCartButton: ["addToCartButton"],
  nftDescriptionPage: ["nftDescriptionPage"],
  details: ["details"],
  container42: ["container42"],
  container5: ["container5"],
  footer: ["footer"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicItem__ArgProps,
      internalVariantPropNames: PlasmicItem__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicItem__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicItem";
  } else {
    func.displayName = `PlasmicItem.${nodeName}`;
  }
  return func;
}

export const PlasmicItem = Object.assign(
  // Top-level PlasmicItem renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navBar: makeNodeComponent("navBar"),
    container432: makeNodeComponent("container432"),
    nftImagePage: makeNodeComponent("nftImagePage"),
    nftTransfers: makeNodeComponent("nftTransfers"),
    nftNamePage: makeNodeComponent("nftNamePage"),
    auth: makeNodeComponent("auth"),
    ownerAuth: makeNodeComponent("ownerAuth"),
    price: makeNodeComponent("price"),
    nftPrice: makeNodeComponent("nftPrice"),
    nftQuantityPage: makeNodeComponent("nftQuantityPage"),
    quantity: makeNodeComponent("quantity"),
    likeButton: makeNodeComponent("likeButton"),
    addToCartButton: makeNodeComponent("addToCartButton"),
    nftDescriptionPage: makeNodeComponent("nftDescriptionPage"),
    details: makeNodeComponent("details"),
    container42: makeNodeComponent("container42"),
    container5: makeNodeComponent("container5"),
    footer: makeNodeComponent("footer"),
    // Metadata about props expected for PlasmicItem
    internalVariantProps: PlasmicItem__VariantProps,
    internalArgProps: PlasmicItem__ArgProps
  }
);

export default PlasmicItem;
/* prettier-ignore-end */
