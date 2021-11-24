// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: wsRXF2j5MAPa2EH2XkCbWH
// Component: UOMGE3gkcKxO
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
import NftCard from "../../NftCard"; // plasmic-import: 4WAwdYQPvRJW/component
import Footer from "../../Footer"; // plasmic-import: XC4xprCxMga4/component
import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: k702YoelP3ze/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_ecommerce_starter.module.css"; // plasmic-import: wsRXF2j5MAPa2EH2XkCbWH/projectcss
import * as sty from "./PlasmicCategory.module.css"; // plasmic-import: UOMGE3gkcKxO/css
import FilledCircleIcon from "./icons/PlasmicIcon__FilledCircle"; // plasmic-import: TlrRvGVF3293/icon
import EmptyCircleIcon from "./icons/PlasmicIcon__EmptyCircle"; // plasmic-import: 9ZMESpBe44sM/icon

export const PlasmicCategory__VariantProps = new Array();

export const PlasmicCategory__ArgProps = new Array();

function PlasmicCategory__RenderFunc(props) {
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
            searchOpen={"searchOpen"}
          />

          <section
            data-plasmic-name={"section"}
            data-plasmic-override={overrides.section}
            className={classNames(defaultcss.all, projectcss.all, sty.section)}
          >
            <p.Stack
              as={"div"}
              data-plasmic-name={"container6"}
              data-plasmic-override={overrides.container6}
              hasGap={true}
              className={classNames(
                defaultcss.all,
                projectcss.all,
                sty.container6
              )}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(
                  defaultcss.all,
                  projectcss.all,
                  sty.freeBox__vc4EY
                )}
              >
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(
                    defaultcss.all,
                    projectcss.all,
                    sty.freeBox__oLtI
                  )}
                >
                  <div
                    className={classNames(
                      defaultcss.all,
                      projectcss.all,
                      defaultcss.__wab_text,
                      sty.text__bc0Xe
                    )}
                  >
                    {"Categories"}
                  </div>

                  <Button
                    className={classNames("__wab_instance", sty.button__irs1)}
                    states={"active"}
                  >
                    <div
                      className={classNames(
                        defaultcss.all,
                        projectcss.all,
                        defaultcss.__wab_text,
                        sty.text__ycPmw
                      )}
                    >
                      {"All"}
                    </div>
                  </Button>

                  <Button
                    className={classNames("__wab_instance", sty.button__izKQ)}
                  >
                    {"New"}
                  </Button>

                  <Button
                    className={classNames("__wab_instance", sty.button___1H9ZM)}
                  >
                    {"Womens"}
                  </Button>

                  <Button
                    className={classNames("__wab_instance", sty.button__tl8Nb)}
                  >
                    {"Mens"}
                  </Button>

                  <Button
                    className={classNames("__wab_instance", sty.button__l6Bdp)}
                  >
                    {"Kids"}
                  </Button>

                  <Button
                    className={classNames("__wab_instance", sty.button__kzxc3)}
                  >
                    <div
                      className={classNames(
                        defaultcss.all,
                        projectcss.all,
                        defaultcss.__wab_text,
                        sty.text__jy8AE
                      )}
                    >
                      {"On sale"}
                    </div>
                  </Button>
                </p.Stack>

                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(
                    defaultcss.all,
                    projectcss.all,
                    sty.freeBox__aoAFz
                  )}
                >
                  <div
                    className={classNames(
                      defaultcss.all,
                      projectcss.all,
                      defaultcss.__wab_text,
                      sty.text__wFrn2
                    )}
                  >
                    {"Price"}
                  </div>

                  <Button
                    className={classNames("__wab_instance", sty.button__mzXcT)}
                  >
                    {"$0 - $50"}
                  </Button>

                  <Button
                    className={classNames("__wab_instance", sty.button__xy8Cz)}
                  >
                    <div
                      className={classNames(
                        defaultcss.all,
                        projectcss.all,
                        defaultcss.__wab_text,
                        sty.text___5AdZ1
                      )}
                    >
                      {"$51 - $99"}
                    </div>
                  </Button>

                  <Button
                    className={classNames("__wab_instance", sty.button__vwUsP)}
                  >
                    {"$101+"}
                  </Button>
                </p.Stack>

                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(
                    defaultcss.all,
                    projectcss.all,
                    sty.freeBox__uph4O
                  )}
                >
                  <div
                    className={classNames(
                      defaultcss.all,
                      projectcss.all,
                      defaultcss.__wab_text,
                      sty.text__qPjR7
                    )}
                  >
                    {"Colors"}
                  </div>

                  <div
                    className={classNames(
                      defaultcss.all,
                      projectcss.all,
                      sty.freeBox__rzPjx
                    )}
                  >
                    <Button
                      iconOnly={"iconOnly"}
                      size={"narrow"}
                      startIcon={
                        <FilledCircleIcon
                          className={classNames(
                            defaultcss.all,
                            projectcss.all,
                            sty.svg__e4X18
                          )}
                          role={"img"}
                        />
                      }
                    >
                      <div
                        className={classNames(
                          defaultcss.all,
                          projectcss.all,
                          defaultcss.__wab_text,
                          sty.text__yK2Uf
                        )}
                      >
                        {"Adidas"}
                      </div>
                    </Button>

                    <Button
                      iconOnly={"iconOnly"}
                      size={"narrow"}
                      startIcon={
                        <FilledCircleIcon
                          className={classNames(
                            defaultcss.all,
                            projectcss.all,
                            sty.svg__eUh4A
                          )}
                          role={"img"}
                        />
                      }
                    >
                      <div
                        className={classNames(
                          defaultcss.all,
                          projectcss.all,
                          defaultcss.__wab_text,
                          sty.text__wehqI
                        )}
                      >
                        {"Adidas"}
                      </div>
                    </Button>

                    <Button
                      iconOnly={"iconOnly"}
                      size={"narrow"}
                      startIcon={
                        <FilledCircleIcon
                          className={classNames(
                            defaultcss.all,
                            projectcss.all,
                            sty.svg__zpg4V
                          )}
                          role={"img"}
                        />
                      }
                    >
                      <div
                        className={classNames(
                          defaultcss.all,
                          projectcss.all,
                          defaultcss.__wab_text,
                          sty.text__z7SGe
                        )}
                      >
                        {"Adidas"}
                      </div>
                    </Button>

                    <Button
                      iconOnly={"iconOnly"}
                      size={"narrow"}
                      startIcon={
                        <FilledCircleIcon
                          className={classNames(
                            defaultcss.all,
                            projectcss.all,
                            sty.svg__ckHM
                          )}
                          role={"img"}
                        />
                      }
                    >
                      <div
                        className={classNames(
                          defaultcss.all,
                          projectcss.all,
                          defaultcss.__wab_text,
                          sty.text__nFtMr
                        )}
                      >
                        {"Adidas"}
                      </div>
                    </Button>

                    <Button
                      iconOnly={"iconOnly"}
                      size={"narrow"}
                      startIcon={
                        <FilledCircleIcon
                          className={classNames(
                            defaultcss.all,
                            projectcss.all,
                            sty.svg__vku3V
                          )}
                          role={"img"}
                        />
                      }
                    >
                      <div
                        className={classNames(
                          defaultcss.all,
                          projectcss.all,
                          defaultcss.__wab_text,
                          sty.text___1XDvL
                        )}
                      >
                        {"Adidas"}
                      </div>
                    </Button>

                    <Button
                      iconOnly={"iconOnly"}
                      size={"narrow"}
                      startIcon={
                        <FilledCircleIcon
                          className={classNames(
                            defaultcss.all,
                            projectcss.all,
                            sty.svg__dbYg2
                          )}
                          role={"img"}
                        />
                      }
                    >
                      <div
                        className={classNames(
                          defaultcss.all,
                          projectcss.all,
                          defaultcss.__wab_text,
                          sty.text__yoSfu
                        )}
                      >
                        {"Adidas"}
                      </div>
                    </Button>

                    <Button
                      iconOnly={"iconOnly"}
                      size={"narrow"}
                      startIcon={
                        <FilledCircleIcon
                          className={classNames(
                            defaultcss.all,
                            projectcss.all,
                            sty.svg__pbhpf
                          )}
                          role={"img"}
                        />
                      }
                    >
                      <div
                        className={classNames(
                          defaultcss.all,
                          projectcss.all,
                          defaultcss.__wab_text,
                          sty.text__roGd9
                        )}
                      >
                        {"Adidas"}
                      </div>
                    </Button>

                    <Button
                      iconOnly={"iconOnly"}
                      size={"narrow"}
                      startIcon={
                        <FilledCircleIcon
                          className={classNames(
                            defaultcss.all,
                            projectcss.all,
                            sty.svg___4RmJ
                          )}
                          role={"img"}
                        />
                      }
                    >
                      <div
                        className={classNames(
                          defaultcss.all,
                          projectcss.all,
                          defaultcss.__wab_text,
                          sty.text__agduI
                        )}
                      >
                        {"Adidas"}
                      </div>
                    </Button>

                    <Button
                      iconOnly={"iconOnly"}
                      size={"narrow"}
                      startIcon={
                        <FilledCircleIcon
                          className={classNames(
                            defaultcss.all,
                            projectcss.all,
                            sty.svg__hvy8K
                          )}
                          role={"img"}
                        />
                      }
                    >
                      <div
                        className={classNames(
                          defaultcss.all,
                          projectcss.all,
                          defaultcss.__wab_text,
                          sty.text___8PeNt
                        )}
                      >
                        {"Adidas"}
                      </div>
                    </Button>

                    <Button
                      iconOnly={"iconOnly"}
                      size={"narrow"}
                      startIcon={
                        <FilledCircleIcon
                          className={classNames(
                            defaultcss.all,
                            projectcss.all,
                            sty.svg__udKx7
                          )}
                          role={"img"}
                        />
                      }
                    >
                      <div
                        className={classNames(
                          defaultcss.all,
                          projectcss.all,
                          defaultcss.__wab_text,
                          sty.text__atMm9
                        )}
                      >
                        {"Adidas"}
                      </div>
                    </Button>

                    <Button
                      iconOnly={"iconOnly"}
                      size={"narrow"}
                      startIcon={
                        <FilledCircleIcon
                          className={classNames(
                            defaultcss.all,
                            projectcss.all,
                            sty.svg__kBug6
                          )}
                          role={"img"}
                        />
                      }
                    >
                      <div
                        className={classNames(
                          defaultcss.all,
                          projectcss.all,
                          defaultcss.__wab_text,
                          sty.text__r2Dcb
                        )}
                      >
                        {"Adidas"}
                      </div>
                    </Button>

                    <Button
                      iconOnly={"iconOnly"}
                      size={"narrow"}
                      startIcon={
                        <FilledCircleIcon
                          className={classNames(
                            defaultcss.all,
                            projectcss.all,
                            sty.svg__kgkkx
                          )}
                          role={"img"}
                        />
                      }
                    >
                      <div
                        className={classNames(
                          defaultcss.all,
                          projectcss.all,
                          defaultcss.__wab_text,
                          sty.text__rxW61
                        )}
                      >
                        {"Adidas"}
                      </div>
                    </Button>

                    <Button
                      iconOnly={"iconOnly"}
                      size={"narrow"}
                      startIcon={
                        <FilledCircleIcon
                          className={classNames(
                            defaultcss.all,
                            projectcss.all,
                            sty.svg__pvRJv
                          )}
                          role={"img"}
                        />
                      }
                    >
                      <div
                        className={classNames(
                          defaultcss.all,
                          projectcss.all,
                          defaultcss.__wab_text,
                          sty.text__tUMl
                        )}
                      >
                        {"Adidas"}
                      </div>
                    </Button>

                    <Button
                      iconOnly={"iconOnly"}
                      size={"narrow"}
                      startIcon={
                        <FilledCircleIcon
                          className={classNames(
                            defaultcss.all,
                            projectcss.all,
                            sty.svg__zIysd
                          )}
                          role={"img"}
                        />
                      }
                    >
                      <div
                        className={classNames(
                          defaultcss.all,
                          projectcss.all,
                          defaultcss.__wab_text,
                          sty.text__ipvAe
                        )}
                      >
                        {"Adidas"}
                      </div>
                    </Button>

                    <Button
                      iconOnly={"iconOnly"}
                      size={"narrow"}
                      startIcon={
                        <EmptyCircleIcon
                          className={classNames(
                            defaultcss.all,
                            projectcss.all,
                            sty.svg___0VIk
                          )}
                          role={"img"}
                        />
                      }
                    >
                      <div
                        className={classNames(
                          defaultcss.all,
                          projectcss.all,
                          defaultcss.__wab_text,
                          sty.text___1YPtD
                        )}
                      >
                        {"Adidas"}
                      </div>
                    </Button>
                  </div>
                </p.Stack>

                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(
                    defaultcss.all,
                    projectcss.all,
                    sty.freeBox__dWt1V
                  )}
                >
                  <div
                    className={classNames(
                      defaultcss.all,
                      projectcss.all,
                      defaultcss.__wab_text,
                      sty.text___6MHj
                    )}
                  >
                    {"Brands"}
                  </div>

                  <Button
                    className={classNames("__wab_instance", sty.button__trG8M)}
                  >
                    {"Adidas"}
                  </Button>

                  <Button
                    className={classNames("__wab_instance", sty.button__fuOoW)}
                  >
                    <div
                      className={classNames(
                        defaultcss.all,
                        projectcss.all,
                        defaultcss.__wab_text,
                        sty.text__npf7E
                      )}
                    >
                      {"Asics"}
                    </div>
                  </Button>

                  <Button
                    className={classNames("__wab_instance", sty.button__eiMnM)}
                  >
                    {"Crocs"}
                  </Button>

                  <Button
                    className={classNames("__wab_instance", sty.button___0QSn8)}
                  >
                    {"Fila"}
                  </Button>

                  <Button
                    className={classNames("__wab_instance", sty.button__ozkCs)}
                  >
                    {"Nike"}
                  </Button>

                  <Button
                    className={classNames("__wab_instance", sty.button__mTd2R)}
                  >
                    {"Puma"}
                  </Button>

                  <Button
                    className={classNames("__wab_instance", sty.button__bYxPa)}
                  >
                    {"Reebok"}
                  </Button>
                </p.Stack>
              </p.Stack>

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(
                  defaultcss.all,
                  projectcss.all,
                  sty.freeBox__x0Ubt
                )}
              >
                <NftCard
                  className={classNames("__wab_instance", sty.nftCard__bsxzZ)}
                  img={{
                    src: "https://img.plasmic.app/img-optimizer/v1/img/0d068a5f1b6662e7652eebef8b3df423.png",
                    fullWidth: 864,
                    fullHeight: 1080
                  }}
                  link={"/item"}
                  small={"small"}
                  tags={
                    <Button colors={"lightGray"} size={"small"}>
                      {"New"}
                    </Button>
                  }
                />

                <NftCard
                  className={classNames("__wab_instance", sty.nftCard___9O0Eb)}
                  img={{
                    src: "https://img.plasmic.app/img-optimizer/v1/img/9fa4193291fa88aaefc33131274c8ab4.png",
                    fullWidth: 964,
                    fullHeight: 898
                  }}
                  link={"/item"}
                  small={"small"}
                  tags={
                    <Button colors={"lightGray"} size={"small"}>
                      {"New"}
                    </Button>
                  }
                />

                <NftCard
                  className={classNames("__wab_instance", sty.nftCard__qGkIe)}
                  img={{
                    src: "https://img.plasmic.app/img-optimizer/v1/img/efddec03027d36e0a52dfc61e3c4ad2b.png",
                    fullWidth: 1024,
                    fullHeight: 768
                  }}
                  link={"/item"}
                  small={"small"}
                  tags={
                    <Button colors={"lightGray"} size={"small"}>
                      {"New"}
                    </Button>
                  }
                />

                <NftCard
                  className={classNames("__wab_instance", sty.nftCard__bt5M1)}
                  img={{
                    src: "https://img.plasmic.app/img-optimizer/v1/img/e5ff5d24d4147571ef0610520f74eaf0.png",
                    fullWidth: 2000,
                    fullHeight: 2000
                  }}
                  link={"/item"}
                  small={"small"}
                  tags={
                    <Button colors={"lightGray"} size={"small"}>
                      {"New"}
                    </Button>
                  }
                />

                <NftCard
                  className={classNames("__wab_instance", sty.nftCard__zMvds)}
                  img={{
                    src: "https://img.plasmic.app/img-optimizer/v1/img/56b9e305cfe5297b4d9b9233ed9c3083.png",
                    fullWidth: 320,
                    fullHeight: 320
                  }}
                  link={"/item"}
                  small={"small"}
                  tags={
                    <Button colors={"lightGray"} size={"small"}>
                      {"New"}
                    </Button>
                  }
                />

                <NftCard
                  className={classNames("__wab_instance", sty.nftCard__jeVyJ)}
                  img={{
                    src: "https://img.plasmic.app/img-optimizer/v1/img/e179c29f390de79c3ec3aada27732e64.png",
                    fullWidth: 840,
                    fullHeight: 840
                  }}
                  link={"/item"}
                  small={"small"}
                  tags={
                    <Button colors={"lightGray"} size={"small"}>
                      {"New"}
                    </Button>
                  }
                />

                <NftCard
                  className={classNames("__wab_instance", sty.nftCard__wFe7B)}
                  img={{
                    src: "https://img.plasmic.app/img-optimizer/v1/img/27587210711d41af77703fb12e0df8f4.png",
                    fullWidth: 864,
                    fullHeight: 1080
                  }}
                  link={"/item"}
                  small={"small"}
                  tags={
                    <Button colors={"lightGray"} size={"small"}>
                      {"New"}
                    </Button>
                  }
                />

                <NftCard
                  className={classNames("__wab_instance", sty.nftCard__ve4Dm)}
                  img={{
                    src: "https://img.plasmic.app/img-optimizer/v1/img/567e7aed36548b16eec4a6d1454ad219.png",
                    fullWidth: 1024,
                    fullHeight: 768
                  }}
                  link={"/item"}
                  small={"small"}
                  tags={
                    <Button colors={"lightGray"} size={"small"}>
                      {"New"}
                    </Button>
                  }
                />

                <NftCard
                  className={classNames("__wab_instance", sty.nftCard__ny5J6)}
                  img={{
                    src: "https://img.plasmic.app/img-optimizer/v1/img/051a538116736eadbf1efb3622835451.png",
                    fullWidth: 964,
                    fullHeight: 898
                  }}
                  link={"/item"}
                  small={"small"}
                  tags={
                    <Button colors={"lightGray"} size={"small"}>
                      {"New"}
                    </Button>
                  }
                />

                <NftCard
                  className={classNames("__wab_instance", sty.nftCard__cw0Md)}
                  img={{
                    src: "https://img.plasmic.app/img-optimizer/v1/img/4b665a5b5c55a34b1f07ba74bc2500ed.png",
                    fullWidth: 766,
                    fullHeight: 766
                  }}
                  link={"/item"}
                  small={"small"}
                  tags={
                    <Button colors={"lightGray"} size={"small"}>
                      {"New"}
                    </Button>
                  }
                />

                <NftCard
                  className={classNames("__wab_instance", sty.nftCard__xOsJe)}
                  img={{
                    src: "https://img.plasmic.app/img-optimizer/v1/img/3147e2e08b361785b8dd3811f4641a6e.png",
                    fullWidth: 2000,
                    fullHeight: 2000
                  }}
                  link={"/item"}
                  small={"small"}
                  tags={
                    <Button colors={"lightGray"} size={"small"}>
                      {"New"}
                    </Button>
                  }
                />

                <NftCard
                  className={classNames("__wab_instance", sty.nftCard__gCsMp)}
                  img={{
                    src: "https://img.plasmic.app/img-optimizer/v1/img/befe1df81efc9a28d3235362e92f0fa8.png",
                    fullWidth: 840,
                    fullHeight: 840
                  }}
                  link={"/item"}
                  small={"small"}
                  tags={
                    <Button colors={"lightGray"} size={"small"}>
                      {"New"}
                    </Button>
                  }
                />

                <NftCard
                  className={classNames("__wab_instance", sty.nftCard___88Ha)}
                  img={{
                    src: "https://img.plasmic.app/img-optimizer/v1/img/aca490781ed5cdb4bc673dfbf6446fb4.png",
                    fullWidth: 840,
                    fullHeight: 840
                  }}
                  link={"/item"}
                  small={"small"}
                  tags={
                    <Button colors={"lightGray"} size={"small"}>
                      {"New"}
                    </Button>
                  }
                />

                <NftCard
                  className={classNames("__wab_instance", sty.nftCard__dfRTg)}
                  img={{
                    src: "https://img.plasmic.app/img-optimizer/v1/img/9684c86e748e82236bfc836da1bc4ab9.png",
                    fullWidth: 864,
                    fullHeight: 1080
                  }}
                  link={"/item"}
                  small={"small"}
                  tags={
                    <Button colors={"lightGray"} size={"small"}>
                      {"New"}
                    </Button>
                  }
                />

                <NftCard
                  className={classNames("__wab_instance", sty.nftCard__d19SN)}
                  img={{
                    src: "https://img.plasmic.app/img-optimizer/v1/img/d1a314023737aac5a73fede7f1ef1e00.png",
                    fullWidth: 840,
                    fullHeight: 840
                  }}
                  link={"/item"}
                  small={"small"}
                  tags={
                    <Button colors={"lightGray"} size={"small"}>
                      {"New"}
                    </Button>
                  }
                />

                <NftCard
                  className={classNames("__wab_instance", sty.nftCard__r2NDt)}
                  img={{
                    src: "https://img.plasmic.app/img-optimizer/v1/img/946b8531b58062ba8a6a94192775b40a.png",
                    fullWidth: 864,
                    fullHeight: 1080
                  }}
                  link={"/item"}
                  small={"small"}
                  tags={
                    <Button colors={"lightGray"} size={"small"}>
                      {"New"}
                    </Button>
                  }
                />
              </p.Stack>
            </p.Stack>
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
  root: ["root", "navBar", "section", "container6", "footer"],
  navBar: ["navBar"],
  section: ["section", "container6"],
  container6: ["container6"],
  footer: ["footer"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicCategory__ArgProps,
      internalVariantPropNames: PlasmicCategory__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicCategory__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCategory";
  } else {
    func.displayName = `PlasmicCategory.${nodeName}`;
  }
  return func;
}

export const PlasmicCategory = Object.assign(
  // Top-level PlasmicCategory renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navBar: makeNodeComponent("navBar"),
    section: makeNodeComponent("section"),
    container6: makeNodeComponent("container6"),
    footer: makeNodeComponent("footer"),
    // Metadata about props expected for PlasmicCategory
    internalVariantProps: PlasmicCategory__VariantProps,
    internalArgProps: PlasmicCategory__ArgProps
  }
);

export default PlasmicCategory;
/* prettier-ignore-end */