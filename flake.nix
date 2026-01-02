{
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { nixpkgs, flake-utils, ... }:
    flake-utils.lib.eachDefaultSystem (system:
      let pkgs = nixpkgs.legacyPackages.${system};
      in {
        devShells.default = pkgs.mkShell {
          buildInputs = [
            pkgs.nodejs_22 # Node.js version specified in package.json (22.20.0)
            pkgs.python3 # Required for building native modules (Python 3.12+ needs setuptools)
            pkgs.python3Packages.setuptools # Required when Python 3.12+ is used (distutils deprecated)
          ];
        };
      });
}
