import ICertificate from 'comom/interfaces/ICertificate';

export default interface IAbility{
    id: number,
    name: string,
    description: string,
    certified?: ICertificate,
    icon: string
}
