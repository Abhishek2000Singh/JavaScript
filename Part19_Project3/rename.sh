
script_name = $0
script_full_path = $(dirmname "$0")

echo "script_name: $script_name"
echo "full path: $script_full_path"

node "$script_full_path/index.js"