# Quick Fix for npm install Error

## 🚨 **Issue**: npm ENOENT Error
**Error**: `Could not read package.json: Error: ENOENT: no such file or directory, open 'C:\projects\package.json'`

## ✅ **Solution**: Navigate to Correct Directory

### **Option 1: Navigate to Project Subdirectory**
```powershell
PS C:\projects> cd openprison
PS C:\projects\openprison> npm install
```

### **Option 2: Navigate to Root Directory**  
```powershell
PS C:\projects> cd thelab
PS C:\projects\thelab> npm install
```

## 🔧 **Step-by-Step Instructions**

1. **Check what's in your projects directory**:
   ```powershell
   PS C:\projects> dir
   ```

2. **If you see the `openprison` folder**:
   ```powershell
   PS C:\projects> cd openprison
   PS C:\projects\openprison> npm install
   ```

3. **If you see the `thelab` folder**:
   ```powershell
   PS C:\projects> cd thelab
   PS C:\projects\thelab> npm install
   ```

4. **If you see both folders** and want to run from root:
   ```powershell
   PS C:\projects> cd thelab
   PS C:\projects\thelab> npm install
   ```

## 🎯 **Expected Result**
Once you're in the correct directory with a `package.json` file, you should see:
- Clean npm install output (no tar warnings!)
- Fast installation
- Ready to run `npm run dev`

## 📍 **Quick Directory Check**
Run this to see where you should be:
```powershell
PS C:\projects> dir -Recurse -Depth 2 | Where-Object {$_.Name -eq "package.json"}
```

This will show you where all the package.json files are located in your projects directory.