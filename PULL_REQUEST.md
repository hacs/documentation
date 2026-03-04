# Add Multilingual README Documentation

## Summary

This PR adds documentation for multilingual README files in HACS. Repository maintainers can now provide README content in multiple languages using standardized file naming patterns.

## Changes

1. **README Documentation** (`source/docs/publish/start.md`)
   - Added section explaining multilingual README support
   - Documents `README.{language_code}.md` naming pattern
   - Explains automatic language detection and fallback behavior

2. **hacs.json Manifest** (`source/docs/publish/start.md`)
   - Updated `content_languages` key documentation
   - Documents language code requirements (2-letter ISO 639-1)

3. **User Documentation** (`source/docs/use/repositories/dashboard.md`)
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

- Repository maintainers can provide multilingual README files using `README.{language_code}.md` (e.g., `README.de.md`, `README.fr.md`)
- HACS automatically displays README content matching the user's Home Assistant language setting
- Falls back to default `README.md` if language-specific version is not available

