import React, { FC } from "react";
import Link from "next/link";

export type Breadcrumb = {
  item: string;
  path: string;
}

type BreadcrumbsProps = {
  breadcrumbs: Breadcrumb[],
  classname: string,
  del: string;
}

const Breadcrumbs: FC<BreadcrumbsProps> = ({ breadcrumbs, classname, del }) => {

  return (
    <div className={classname}>
      <ul>
        {breadcrumbs.map((breadcrumb, i) => (
          <li key={breadcrumb.item}>
            {i !== breadcrumbs.length - 1 ?
              (<><Link href={breadcrumb.path}>{breadcrumb.item}</Link> &nbsp;<span>{del}</span>&nbsp;</>) :
              (<span>{breadcrumb.item}</span>)
            }
          </li>
        ))}
      </ul>
    </div >
  );
};

export default Breadcrumbs;