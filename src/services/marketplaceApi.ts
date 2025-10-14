import { ApiResponse, MarketplaceData, MarketplaceFilters, SetItem } from '@/types/marketplace';

const API_BASE_URL = 'https://app.gettbot.io/api';

class MarketplaceApiService {
  private async makeRequest<T>(
    endpoint: string,
    params: Record<string, string | number | boolean | string[] | undefined | null> = {}
  ): Promise<T> {
    const url = new URL(`${API_BASE_URL}${endpoint}`);
    
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== '') {
        if (Array.isArray(value)) {
          url.searchParams.append(key, value.join(','));
        } else {
          url.searchParams.append(key, value.toString());
        }
      }
    });

    try {
      console.log('Full API URL:', url.toString());
      const response = await fetch(url.toString(), {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: ApiResponse<T> = await response.json();
      
      console.log('API Response:', data);
      
      if (data.errors && data.errors.length > 0) {
        throw new Error(`API errors: ${data.errors.join(', ')}`);
      }

      return data.data;
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  async getSets(filters: MarketplaceFilters): Promise<MarketplaceData> {
    const apiParams: Record<string, string | number | boolean | string[] | undefined> = {
      Limit: filters.limit,
      Offset: filters.offset,
      OrderBy: filters.orderBy,
      OrderDirection: filters.orderDirection,
    };

    if (filters.searchString) {
      apiParams.SearchString = filters.searchString;
    }
    if (filters.minInvestment !== undefined) {
      apiParams.MinInvestment = filters.minInvestment;
    }
    if (filters.maxInvestment !== undefined) {
      apiParams.MaxInvestment = filters.maxInvestment;
    }
    if (filters.botsAmount !== undefined) {
      apiParams.BotsAmount = filters.botsAmount;
    }
    if (filters.currencies && filters.currencies.length > 0) {
      apiParams.Currencies = filters.currencies.join(',');
    }
    if (filters.providerFilter && filters.providerFilter !== "All") {
      apiParams.ProviderFilter = filters.providerFilter;
    }
    if (filters.riskinessFilter && filters.riskinessFilter !== "Any") {
      apiParams.RiskinessFilter = filters.riskinessFilter;
    }
    if (filters.clientStatusFilter && filters.clientStatusFilter !== "Any") {
      apiParams.ClientStatusFilter = filters.clientStatusFilter;
    }

    console.log('API Request params:', apiParams);
    return this.makeRequest<MarketplaceData>('/Set/Template', apiParams);
  }

  async getSetById(id: string): Promise<SetItem> {
    return this.makeRequest<SetItem>(`/Set/${id}`);
  }

  async searchSets(query: string, limit: number = 10, offset: number = 0): Promise<MarketplaceData> {
    return this.getSets({
      limit,
      offset,
      orderBy: 'Name',
      orderDirection: 'Asc',
      searchString: query,
    });
  }

  async getPopularSets(limit: number = 10, offset: number = 0): Promise<MarketplaceData> {
    return this.getSets({
      limit,
      offset,
      orderBy: 'TotalYield',
      orderDirection: 'Desc',
      clientStatusFilter: 'Popular',
    });
  }

  async getRecommendedSets(limit: number = 10, offset: number = 0): Promise<MarketplaceData> {
    return this.getSets({
      limit,
      offset,
      orderBy: 'TotalYield',
      orderDirection: 'Desc',
      clientStatusFilter: 'Recommended',
    });
  }
}

export const marketplaceApi = new MarketplaceApiService();


export { MarketplaceApiService };
