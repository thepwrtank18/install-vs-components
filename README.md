# Install VS Components

This action installs the component(s) specified into Visual Studio for that run.

## Inputs

### `components`

**Required** The component(s) to be installed, seperated by only a comma.

## Outputs

### `success`

Whether it is successful or not, bring true or false. It should throw an exception anyway if it's not successful.

## Example usage

```yaml
uses: thepwrtank18/install-vs-components
with:
  components: Microsoft.VisualStudio.Component.WinXP,Microsoft.Net.Component.4.6.2.TargetingPack'
```
