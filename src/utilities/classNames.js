/**
 * Conditional join classes together
 * @param  {Array} classes - the list of classes that should be added
 * @example
 * const componentClass = classNames(
 *     'className',
 *     isActive && 'is-active'
 * );
 * @returns a list of classes with some conditional applied 
 */
export default function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}