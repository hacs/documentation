# Add Multilingual README and Description Documentation

## Summary

This PR adds documentation for multilingual README files and repository descriptions in HACS. Repository maintainers can now provide content in multiple languages using standardized file naming patterns.

## Changes

1. **README Documentation** (`source/docs/publish/start.md`)
   - Added section explaining multilingual README support
   - Documents `README.{language_code}.md` naming pattern
   - Explains automatic language detection and fallback behavior

2. **Description Documentation** (`source/docs/publish/start.md`)
   - Added section explaining multilingual description support
   - Documents `DESCRIPTION.{language_code}.txt` naming pattern
   - Explains automatic language detection and fallback to GitHub description

3. **hacs.json Manifest** (`source/docs/publish/start.md`)
   - Updated `content_languages` key documentation
   - Clarifies that it applies to both README and description files
   - Documents language code requirements (2-letter ISO 639-1)

4. **User Documentation** (`source/docs/use/repositories/dashboard.md`)
   - Added brief note about automatic language detection for README files

## Related PRs

- **Backend PR:** https://github.com/hacs/integration/pull/4965
- **Frontend PR:** https://github.com/hacs/frontend/pull/XXX

## Checklist

- [x] Documentation follows project style guidelines
- [x] All examples are correct
- [x] Links are valid
- [x] Content is consistent with implementation

## Notes

- Repository maintainers can provide multilingual content using:
  - `README.{language_code}.md` for README files
  - `DESCRIPTION.{language_code}.txt` for repository descriptions
- HACS automatically displays content matching the user's Home Assistant language setting
- Falls back to default English content if language-specific version is not available

