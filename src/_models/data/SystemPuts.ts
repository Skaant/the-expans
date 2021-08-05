import ResourcePut from "./RessourcePut";

/** `SystemPuts` aggregates a set of
 *  `ResourcePut` under both `inputs?` and
 *  `outputs?` props.
 *
 * @note A system is characterized by **its
 *  inputs and outputs**; the differences between
 *  them determining **its functions**.
 */
type SystemPuts = {
  inputs?: ResourcePut[];
  outputs?: ResourcePut[];
};

export default SystemPuts;
