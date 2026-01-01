param(
    [string]$command
)

switch ($command) {

    "push" {
        git add .
        git commit -m "Operator update"
        git push
        Write-Host "Pushed to GitHub."
    }

    "pull" {
        git pull
        Write-Host "Pulled latest changes."
    }

    "sync" {
        git pull
        git add .
        git commit -m "Operator sync"
        git push
        Write-Host "Synced both directions."
    }

    "open" {
        code .
    }

    default {
        Write-Host "OIF Commands:"
        Write-Host "  oif push   - push changes to GitHub"
        Write-Host "  oif pull   - pull changes from GitHub"
        Write-Host "  oif sync   - pull + push"
        Write-Host "  oif open   - open VS Code"
    }
}