# Jazzy Documentation Generation Action

This action runs "jazzy" command with the provided configuration options to generate/update the documentation folder.

## Inputs

### `config`

Path to .jazzy.yml file - preferred.

### `args`

Arguments to pass to Jazzy
    
### `version`

Jazzy Version

### `personal_access_token`

**Required** Personal access token


## Outputs

### docs/ folder

The updated or newly generated documentation folder.

## Example usage

```yaml
...
    - name: Publish Jazzy Docs
      uses: grkmndr/Jazzy-Publish-Action@v1
      with:
        personal_access_token: ${{ secrets.ACCESS_TOKEN }}
        config: .jazzy.yml
        args: "--theme fullwidth --author Johnny Appleseed"
        version: 0.11.2
```