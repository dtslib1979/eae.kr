# Environment Setup Instructions

## Quick Start for BlindScrollHandle Feature

To enable the BlindScrollHandle (invisible left-side scroll button for tablet recordings), you need to set an environment variable.

### Development Setup

1. **Copy the example environment file**:
   ```bash
   cp .env.example .env
   ```

2. **Edit `.env` and uncomment the variable**:
   ```bash
   # In .env file
   VITE_TEACHER_SCROLL=1
   ```

3. **Restart your dev server**:
   ```bash
   npm run dev
   ```

The BlindScrollHandle will now be active on all post pages.

### Production Deployment

For GitHub Pages deployment, the environment variable is automatically set in `.github/workflows/deploy.yml`:

```yaml
- name: Build
  run: npm run build
  env:
    VITE_TEACHER_SCROLL: "1"
```

**No additional configuration needed for production!** ✅

### What is BlindScrollHandle?

An invisible touch zone positioned on the left side of the screen (mid-height) that enables auto-scrolling functionality. Specifically designed for:

- 📱 Tablet handwriting/recording sessions
- 🎥 Video recording without visible UI elements
- 📝 Smooth upward scrolling during presentations

**Specifications**:
- **Position**: Fixed left, vertically centered
- **Size**: 56px (width) × 160px (height)
- **Scroll Speed**: 64px per 50ms interval
- **Visibility**: Completely transparent
- **Trigger**: Press and hold to scroll

### Disabling the Feature

To disable the BlindScrollHandle:

**Development**:
- Delete `.env` file, or
- Set `VITE_TEACHER_SCROLL=0`, or
- Comment out the line in `.env`

**Production**:
- Remove or comment out the `env:` section in `.github/workflows/deploy.yml`

### Verification

After enabling, you can verify it's working:

1. Navigate to any post page (e.g., `/category/eae-blueprint/accordion-demo`)
2. Open browser DevTools (F12) and run:
   ```javascript
   document.querySelector('[aria-hidden="true"]') !== null
   ```
   Should return `true` if enabled

3. The component is invisible by design - check the left edge of the screen around mid-height

### Troubleshooting

**BlindScrollHandle not working?**
- ✅ Check `.env` file exists and contains `VITE_TEACHER_SCROLL=1`
- ✅ Restart dev server after creating/modifying `.env`
- ✅ Verify you're on a Post page (not Home or Category listing)
- ✅ Check browser console for any errors

**Still not working?**
- Clear browser cache
- Check `.env` file is not in `.gitignore` exclusions
- Verify Vite is loading the environment variable (check build output)

---

For more details, see:
- `TECHNICAL-ANALYSIS-REPORT.md` - Complete technical analysis
- `FIX-IMPLEMENTATION-GUIDE.md` - Implementation guide
- `.env.example` - Example configuration file
