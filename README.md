oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g tiptoi
$ tiptoi COMMAND
running command...
$ tiptoi (--version)
tiptoi/0.0.0 linux-x64 node-v17.6.0
$ tiptoi --help [COMMAND]
USAGE
  $ tiptoi COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`tiptoi hello PERSON`](#tiptoi-hello-person)
* [`tiptoi hello world`](#tiptoi-hello-world)
* [`tiptoi help [COMMAND]`](#tiptoi-help-command)
* [`tiptoi plugins`](#tiptoi-plugins)
* [`tiptoi plugins:install PLUGIN...`](#tiptoi-pluginsinstall-plugin)
* [`tiptoi plugins:inspect PLUGIN...`](#tiptoi-pluginsinspect-plugin)
* [`tiptoi plugins:install PLUGIN...`](#tiptoi-pluginsinstall-plugin-1)
* [`tiptoi plugins:link PLUGIN`](#tiptoi-pluginslink-plugin)
* [`tiptoi plugins:uninstall PLUGIN...`](#tiptoi-pluginsuninstall-plugin)
* [`tiptoi plugins:uninstall PLUGIN...`](#tiptoi-pluginsuninstall-plugin-1)
* [`tiptoi plugins:uninstall PLUGIN...`](#tiptoi-pluginsuninstall-plugin-2)
* [`tiptoi plugins update`](#tiptoi-plugins-update)

## `tiptoi hello PERSON`

Say hello

```
USAGE
  $ tiptoi hello [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Whom is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/resamsel/tiptoi/blob/v0.0.0/dist/commands/hello/index.ts)_

## `tiptoi hello world`

Say hello world

```
USAGE
  $ tiptoi hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ oex hello world
  hello world! (./src/commands/hello/world.ts)
```

## `tiptoi help [COMMAND]`

Display help for tiptoi.

```
USAGE
  $ tiptoi help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for tiptoi.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.12/src/commands/help.ts)_

## `tiptoi plugins`

List installed plugins.

```
USAGE
  $ tiptoi plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ tiptoi plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.0.11/src/commands/plugins/index.ts)_

## `tiptoi plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ tiptoi plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ tiptoi plugins add

EXAMPLES
  $ tiptoi plugins:install myplugin 

  $ tiptoi plugins:install https://github.com/someuser/someplugin

  $ tiptoi plugins:install someuser/someplugin
```

## `tiptoi plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ tiptoi plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ tiptoi plugins:inspect myplugin
```

## `tiptoi plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ tiptoi plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ tiptoi plugins add

EXAMPLES
  $ tiptoi plugins:install myplugin 

  $ tiptoi plugins:install https://github.com/someuser/someplugin

  $ tiptoi plugins:install someuser/someplugin
```

## `tiptoi plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ tiptoi plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLES
  $ tiptoi plugins:link myplugin
```

## `tiptoi plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ tiptoi plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ tiptoi plugins unlink
  $ tiptoi plugins remove
```

## `tiptoi plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ tiptoi plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ tiptoi plugins unlink
  $ tiptoi plugins remove
```

## `tiptoi plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ tiptoi plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ tiptoi plugins unlink
  $ tiptoi plugins remove
```

## `tiptoi plugins update`

Update installed plugins.

```
USAGE
  $ tiptoi plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
