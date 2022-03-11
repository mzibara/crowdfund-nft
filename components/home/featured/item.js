import classNames from 'classnames'
import Link from 'next/link'
import { imgInt8ArrayToDataURL } from '@/helpers/imageHelper'

export default function Item({
    item,
    stats,
    isLoading = false,
    isLoadingStats = false,
}) {
    if (isLoading === true) {
        return (
            <a className='group w-full flex flex-col cursor-pointer'>
                <figure
                    className={classNames(
                        'h-32 w-full lg:rounded-lg animate-pulse overflow-hidden',
                        'bg-gray-200'
                    )}
                />
                <div className='w-full flex flex-row justify-between text-sm mt-2'>
                    <div className='h-5 bg-gray-200 w-32 rounded-lg animate-pulse' />
                    <div className='h-5 bg-gray-200 w-10 rounded-lg animate-pulse' />
                </div>
                <div className='h-3 w-20 rounded-lg bg-gray-200 animate-pulse my-1' />
                <div className='h-3 w-20 rounded-lg bg-gray-200 animate-pulse my-1' />
            </a>
        )
    }

    return (
        <Link
            href={`/project?projectId=${item.project.id}`}
            passHref={true}
            as={`/project.html?projectId=${item.project.id}`}>
            <a className='group w-full flex flex-col cursor-pointer'>
                <figure
                    className={classNames(
                        'h-32 w-full lg:rounded-lg group-hover:scale-105 duration-200 overflow-hidden',
                        'bg-blue-100'
                    )}>
                    <img
                        src={item.project.cover}
                        className='w-full h-full object-cover'
                    />
                </figure>
                <div className='w-full flex flex-row justify-between text-sm mt-2'>
                    <p className='font-semibold'>{item.project.title}</p>
                    <p className='text-indigo-500'>
                        {item.project.goal} ICP goal
                    </p>
                </div>
                <p className='text-sm text-indigo-500'>
                    {isLoadingStats ||
                    stats?.[item.project.id]?.nftsSold === undefined ||
                    stats?.[item.project.id]?.nftPriceE8S === undefined
                        ? '- '
                        : stats[item.project.id].nftsSold *
                              stats[item.project.id].nftPriceE8S +
                          ' '}
                    ICP pledged
                </p>
                <p className='text-gray-400 text-sm'>
                    by {`${item.owner.firstName} ${item.owner.lastName}`}
                </p>
            </a>
        </Link>
    )
}
