/**
 * @template T The type of the forwarded ref.
 * @template P The type of the props the component accepts.
 * @see {@link forwardRef}
 */
export type ForwardRefComponent<T, P> = React.ForwardRefExoticComponent<
  P & React.RefAttributes<T>
>;
