// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: wsRXF2j5MAPa2EH2XkCbWH
// Component: 4WAwdYQPvRJW
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  useTrigger,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import Button from "../../Button"; // plasmic-import: LPkJNTjVmA5d/component
import Rating from "../../Rating"; // plasmic-import: 1Xj9IcyNJkl8/component
import Price from "../../Price"; // plasmic-import: kXXSiZzhuJHJ/component
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_ecommerce_starter.module.css"; // plasmic-import: wsRXF2j5MAPa2EH2XkCbWH/projectcss
import * as sty from "./PlasmicNftCard.module.css"; // plasmic-import: 4WAwdYQPvRJW/css
import RightArrowIcon from "./icons/PlasmicIcon__RightArrow"; // plasmic-import: sth0rOpjGBUT/icon

export const PlasmicNftCard__VariantProps = new Array("small");

export const PlasmicNftCard__ArgProps = new Array(
  "tags",
  "link",
  "rating",
  "img",
  "dollars"
);

function PlasmicNftCard__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  const [isRootHover, triggerRootHoverProps] = useTrigger("useHover", {});
  const triggers = {
    hover_root: isRootHover
  };

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
        sty.root,
        { [sty.root__small]: hasVariant(variants, "small", "small") }
      )}
      data-plasmic-trigger-props={[triggerRootHoverProps]}
    >
      <a
        data-plasmic-name={"link"}
        data-plasmic-override={overrides.link}
        className={classNames(defaultcss.a, projectcss.a, sty.link, {
          [sty.link__small]: hasVariant(variants, "small", "small")
        })}
        href={args.link}
      >
        <p.PlasmicImg
          data-plasmic-name={"nftImage"}
          data-plasmic-override={overrides.nftImage}
          alt={""}
          className={classNames(sty.nftImage)}
          displayHeight={"auto"}
          displayMaxHeight={"none"}
          displayMaxWidth={"none"}
          displayMinHeight={"0"}
          displayMinWidth={"256px"}
          displayWidth={"auto"}
          loader={"plasmic"}
          src={
            args.img !== undefined
              ? args.img
              : {
                  src: "https://img.plasmic.app/img-optimizer/v1/img/aca490781ed5cdb4bc673dfbf6446fb4.png",
                  fullWidth: 840,
                  fullHeight: 840
                }
          }
        />

        {(
          hasVariant(variants, "small", "small") && triggers.hover_root
            ? true
            : false
        ) ? (
          <div
            className={classNames(
              defaultcss.all,
              projectcss.all,
              sty.freeBox__jz9K,
              {
                [sty.freeBox__small__jz9K4VXyz]: hasVariant(
                  variants,
                  "small",
                  "small"
                )
              }
            )}
          />
        ) : null}
        {(hasVariant(variants, "small", "small") ? true : true) ? (
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(
              defaultcss.all,
              projectcss.all,
              sty.freeBox__djdk1,
              {
                [sty.freeBox__small__djdk14VXyz]: hasVariant(
                  variants,
                  "small",
                  "small"
                )
              }
            )}
          >
            {true ? (
              <div
                className={classNames(
                  defaultcss.all,
                  projectcss.all,
                  sty.freeBox__hnZ1J
                )}
              >
                {false
                  ? p.renderPlasmicSlot({
                      defaultContents: (
                        <Button colors={"lightGray"} size={"small"}>
                          {"New"}
                        </Button>
                      ),

                      value: args.tags
                    })
                  : null}
                {false
                  ? p.renderPlasmicSlot({
                      defaultContents: (
                        <Rating
                          className={classNames(
                            "__wab_instance",
                            sty.rating__xOkN
                          )}
                        />
                      ),

                      value: args.rating
                    })
                  : null}
              </div>
            ) : null}

            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(
                defaultcss.all,
                projectcss.all,
                sty.freeBox___415M5
              )}
            >
              <div
                data-plasmic-name={"nftName"}
                data-plasmic-override={overrides.nftName}
                className={classNames(
                  defaultcss.all,
                  projectcss.all,
                  defaultcss.__wab_text,
                  sty.nftName
                )}
              >
                {"Product name"}
              </div>

              <div
                data-plasmic-name={"nftDesc"}
                data-plasmic-override={overrides.nftDesc}
                className={classNames(
                  defaultcss.all,
                  projectcss.all,
                  defaultcss.__wab_text,
                  sty.nftDesc
                )}
              >
                {"If you can dream it, you can build it."}
              </div>
            </p.Stack>

            <Price
              data-plasmic-name={"price"}
              data-plasmic-override={overrides.price}
              className={classNames("__wab_instance", sty.price)}
              dollars={p.renderPlasmicSlot({
                defaultContents: "88",
                value: args.dollars
              })}
            />

            <div
              className={classNames(
                defaultcss.all,
                projectcss.all,
                sty.freeBox__iSa09
              )}
            >
              <RightArrowIcon
                data-plasmic-name={"nftTransfer"}
                data-plasmic-override={overrides.nftTransfer}
                className={classNames(
                  defaultcss.all,
                  projectcss.all,
                  sty.nftTransfer
                )}
                role={"img"}
              />
            </div>
          </p.Stack>
        ) : null}
      </a>
    </div>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "link",
    "nftImage",
    "nftName",
    "nftDesc",
    "price",
    "nftTransfer"
  ],

  link: ["link", "nftImage", "nftName", "nftDesc", "price", "nftTransfer"],
  nftImage: ["nftImage"],
  nftName: ["nftName"],
  nftDesc: ["nftDesc"],
  price: ["price"],
  nftTransfer: ["nftTransfer"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicNftCard__ArgProps,
      internalVariantPropNames: PlasmicNftCard__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicNftCard__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNftCard";
  } else {
    func.displayName = `PlasmicNftCard.${nodeName}`;
  }
  return func;
}

export const PlasmicNftCard = Object.assign(
  // Top-level PlasmicNftCard renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    link: makeNodeComponent("link"),
    nftImage: makeNodeComponent("nftImage"),
    nftName: makeNodeComponent("nftName"),
    nftDesc: makeNodeComponent("nftDesc"),
    price: makeNodeComponent("price"),
    nftTransfer: makeNodeComponent("nftTransfer"),
    // Metadata about props expected for PlasmicNftCard
    internalVariantProps: PlasmicNftCard__VariantProps,
    internalArgProps: PlasmicNftCard__ArgProps
  }
);

export default PlasmicNftCard;
/* prettier-ignore-end */
