import envVars from 'preact-cli-plugin-env-vars';
import preactCliSvgLoader from 'preact-cli-svg-loader';

export default function (config, env, helpers) {
    const css = helpers.getLoadersByName(config, 'css-loader')[0];
    css.loader.options.modules = false;
    envVars(config, env, helpers);
    preactCliSvgLoader(config, helpers);
}