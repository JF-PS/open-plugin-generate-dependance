import { ExecutorContext, readCachedProjectGraph } from '@nrwl/devkit';
import { BuildNodeBuilderOptions } from '../../utils/types';
import { normalizeBuildOptions } from '../../utils/normalize';
import { generatePackageJson } from '../../utils/generate-package-json';

export default async function runExecutor(
  rawOptions: BuildNodeBuilderOptions,
  context: ExecutorContext
) {
  console.debug('===================🦄 PLUGIN EXECUTOR 🚀===================');
  console.debug('------------------------- START ---------------------------');
  console.debug('===========================================================');

  console.debug('OUTPUT PATH : ');
  const outputPath: string = context.target.options.outputPath;
  console.debug(outputPath);
  console.debug('----------------------------------------------------');

  console.debug('PROJECT NAME : ');
  console.debug(context.projectName);
  console.debug('----------------------------------------------------');

  const { sourceRoot, root } = context.workspace.projects[context.projectName];

  console.debug('SOURCE ROOT : ');
  console.debug(sourceRoot);
  console.debug('----------------------------------------------------');

  console.debug('ROOT : ');
  console.debug(root);
  console.debug('----------------------------------------------------');

  const projGraph = readCachedProjectGraph();
  console.debug('PROJECT GRAPH : ');
  console.debug(projGraph);
  console.debug('----------------------------------------------------');

  console.debug('RAW OPTIONS : ');
  console.debug(rawOptions);
  console.debug('----------------------------------------------------');

  console.debug('CONTEXT ROOT: ');
  console.debug(context.root);
  console.debug('----------------------------------------------------');

  const options = normalizeBuildOptions(
    rawOptions,
    context.root,
    sourceRoot,
    root
  );

  console.debug('OPTIONS: ');
  console.debug(options);
  console.debug('----------------------------------------------------');

  generatePackageJson(context.projectName, projGraph, options, outputPath);

  console.debug('===========================================================');
  console.debug('------------------------- END -----------------------------');
  console.debug('===========================================================');

  return {
    success: true,
  };
}
