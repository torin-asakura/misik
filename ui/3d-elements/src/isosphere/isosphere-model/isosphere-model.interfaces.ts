import { AnimationClip }        from 'three'
import { Mesh }                 from 'three'
import { MeshStandardMaterial } from 'three'
import { GLTF }                 from 'three-stdlib'

export type ModelProps = JSX.IntrinsicElements['group']

export interface GLTFAction extends AnimationClip {
  name: 'a'
}

export interface GLTFResult extends GLTF {
  nodes: {
    Icosphere019: Mesh
    Icosphere018: Mesh
    Icosphere017: Mesh
    Icosphere016: Mesh
    Icosphere015: Mesh
    Icosphere014: Mesh
    Icosphere013: Mesh
    Icosphere012: Mesh
    Icosphere011: Mesh
    Icosphere010: Mesh
    Icosphere009: Mesh
    Icosphere008: Mesh
    Icosphere007: Mesh
    Icosphere006: Mesh
    Icosphere005: Mesh
    Icosphere004: Mesh
    Icosphere003: Mesh
    Icosphere002: Mesh
    Icosphere001: Mesh
    Icosphere: Mesh
  }
  materials: {
    ['Material.007']: MeshStandardMaterial
  }
  animations: GLTFAction[]
}
