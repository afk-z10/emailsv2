import { useIsPreview } from "./common/preview";

/**
 * @param {string} name
 * @param {string} [fallback]
 */
export function useData(name, fallback) {
  const isPreview = useIsPreview();
  return isPreview ? fallback : `{{ ${name} }}`;
}

export function HtmlText({ name, children }) {
  const isPreview = useIsPreview();
  return isPreview ? children : `{{{ ${name} }}}`;
}
/**
 * @param {{name:string,data:T[],children?:preact.VNode,render:(x:T)=>preact.VNode}} props
 * @returns {any}
 * @template T
 */
export function Loop({ name, data, children, render }) {
  const isPreview = useIsPreview();
  if (!isPreview) {
    return (
      <>
        {`{{#each ${name}}}`}
        {children}
        {`{{/each}}`}
      </>
    );
  }
  return data.map(render);
}

export function With({ name, children }) {
  const isPreview = useIsPreview();

  if (!isPreview) {
    return (
      <>
        {`{{#with ${name}}}`}
        {children}
        {`{{/with}}`}
      </>
    );
  }
  return children;
}

export function If({ name, condition, children }) {
  const isPreview = useIsPreview();
  if (!isPreview) {
    return (
      <>
        {`{{#if ${name}}}`}
        {children}
        {`{{/if}}`}
      </>
    );
  }

  return condition ? children : null;
}

export function RawIf({ name, condition, children }) {
  const isPreview = useIsPreview();
  if (!isPreview) {
    return (
      <>
        <mj-raw>{`{{#if ${name}}}`}</mj-raw>
        {children}
        <mj-raw>{`{{/if}}`}</mj-raw>
      </>
    );
  }

  return condition ? children : null;
}
